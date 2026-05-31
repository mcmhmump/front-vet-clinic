import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ProxyLog {
  id: string;
  timestamp: string;
  method: string;
  url: string;
  status: number;
  cached: boolean;
}

export interface ProxyEndpoint {
  id: string;
  path: string;
  isActive: boolean;
}

interface ProxyState {
  logs: ProxyLog[];
  endpoints: ProxyEndpoint[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ProxyState = {
  logs: [],
  endpoints: [],
  isLoading: false,
  error: null,
};

const MOCK_ENDPOINTS: ProxyEndpoint[] = [
  { id: "1", path: "/api/pets", isActive: true },
  { id: "2", path: "/api/doctors", isActive: true },
  { id: "3", path: "/api/appointments", isActive: false },
];

const MOCK_LOGS: ProxyLog[] = [
  {
    id: "101",
    timestamp: new Date().toISOString(),
    method: "GET",
    url: "/api/pets",
    status: 200,
    cached: true,
  },
  {
    id: "102",
    timestamp: new Date(Date.now() - 60000).toISOString(),
    method: "POST",
    url: "/api/appointments",
    status: 201,
    cached: false,
  },
  {
    id: "103",
    timestamp: new Date(Date.now() - 120000).toISOString(),
    method: "GET",
    url: "/api/doctors",
    status: 200,
    cached: true,
  },
  {
    id: "104",
    timestamp: new Date(Date.now() - 180000).toISOString(),
    method: "DELETE",
    url: "/api/pets/15",
    status: 403,
    cached: false,
  },
];

export const fetchLogs = createAsyncThunk("proxy/fetchLogs", async () => {
  return new Promise<ProxyLog[]>((resolve) => {
    setTimeout(() => resolve(MOCK_LOGS), 700);
  });
});

export const fetchEndpoints = createAsyncThunk(
  "proxy/fetchEndpoints",
  async () => {
    return new Promise<ProxyEndpoint[]>((resolve) => {
      setTimeout(() => resolve(MOCK_ENDPOINTS), 700);
    });
  }
);

export const addEndpoint = createAsyncThunk(
  "proxy/addEndpoint",
  async (path: string) => {
    return new Promise<ProxyEndpoint>((resolve) => {
      setTimeout(() => {
        resolve({
          id: Date.now().toString(),
          path,
          isActive: true,
        });
      }, 400);
    });
  }
);

export const toggleEndpoint = createAsyncThunk(
  "proxy/toggleEndpoint",
  async ({ id, isActive }: { id: string; isActive: boolean }) => {
    return new Promise<{ id: string; isActive: boolean }>((resolve) => {
      setTimeout(() => resolve({ id, isActive }), 300);
    });
  }
);

const proxySlice = createSlice({
  name: "proxy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.logs = action.payload;
      })
      .addCase(fetchLogs.rejected, (state) => {
        state.isLoading = false;
        state.error = "Ошибка загрузки логов";
      })
      .addCase(fetchEndpoints.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEndpoints.fulfilled, (state, action) => {
        state.isLoading = false;
        state.endpoints = action.payload;
      })
      .addCase(fetchEndpoints.rejected, (state) => {
        state.isLoading = false;
        state.error = "Ошибка загрузки эндпоинтов";
      })
      .addCase(addEndpoint.fulfilled, (state, action) => {
        state.endpoints.push(action.payload);
      })
      .addCase(toggleEndpoint.fulfilled, (state, action) => {
        const endpoint = state.endpoints.find(
          (item) => item.id === action.payload.id
        );

        if (endpoint) {
          endpoint.isActive = action.payload.isActive;
        }
      });
  },
});

export default proxySlice.reducer;