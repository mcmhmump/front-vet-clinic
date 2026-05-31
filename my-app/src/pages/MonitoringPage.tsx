import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logoWindow.png";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addEndpoint,
  fetchEndpoints,
  fetchLogs,
  toggleEndpoint,
} from "../features/proxy/proxySlice";

export const MonitoringPage = () => {
  const dispatch = useAppDispatch();
  const { logs, endpoints, isLoading, error } = useAppSelector(
    (state) => state.proxy
  );

  const [newEndpoint, setNewEndpoint] = useState("");

  useEffect(() => {
    dispatch(fetchLogs());
    dispatch(fetchEndpoints());
  }, [dispatch]);

  const handleAddEndpoint = () => {
    if (!newEndpoint.trim()) return;

    dispatch(addEndpoint(newEndpoint.trim()));
    setNewEndpoint("");
  };

  return (
    <section className="min-h-screen bg-[#F6F2ED] px-6 py-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img src={logo} alt="ВетСфера" className="h-[80px] object-contain" />

          <nav className="flex items-center gap-8">
            <Link
              to="/"
              className="text-[26px] text-[#02000F] font-sans font-medium hover:text-[#F8721F] transition-colors duration-150"
            >
              Главная
            </Link>
          </nav>
        </div>

        <h1 className="text-[32px] font-sans font-semibold text-[#02000F]">
          Мониторинг прокси
        </h1>
      </header>

      <main className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-3">
        <section className="rounded-[24px] bg-white p-8 border border-[#E7E2DC]">
          <h2 className="text-[26px] font-sans font-semibold text-[#02000F]">
            Эндпоинты
          </h2>

          <div className="mt-6 flex gap-3">
            <input
              type="text"
              value={newEndpoint}
              onChange={(e) => setNewEndpoint(e.target.value)}
              placeholder="/api/example"
              className="h-[52px] flex-1 rounded-[12px] border border-[#E7E2DC] px-4 outline-none"
            />
            <button
              onClick={handleAddEndpoint}
              className="h-[52px] rounded-[12px] bg-[#F8721F] px-5 text-white font-medium hover:bg-[#f59a62] transition-colors duration-150"
            >
              Добавить
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {endpoints.map((endpoint) => (
              <div
                key={endpoint.id}
                className="flex items-center justify-between rounded-[16px] bg-[#F6F2ED] px-4 py-4"
              >
                <p className="text-[18px] text-[#02000F]">{endpoint.path}</p>

                <button
                  type="button"
                  onClick={() =>
                    dispatch(
                      toggleEndpoint({
                        id: endpoint.id,
                        isActive: !endpoint.isActive,
                      })
                    )
                  }
                  className={`h-[34px] w-[88px] rounded-[30px] text-[14px] font-medium transition-colors duration-150 ${
                    endpoint.isActive
                      ? "bg-[#F8721F] text-white"
                      : "bg-[#E6E6E6] text-[#6C6D71]"
                  }`}
                >
                  {endpoint.isActive ? "Вкл" : "Выкл"}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="xl:col-span-2 rounded-[24px] bg-white p-8 border border-[#E7E2DC]">
          <div className="flex items-center justify-between">
            <h2 className="text-[26px] font-sans font-semibold text-[#02000F]">
              Логи
            </h2>

            <button
              onClick={() => dispatch(fetchLogs())}
              className="h-[48px] rounded-[30px] border border-[#F8721F] px-5 text-[#F8721F] font-medium hover:bg-[#fff3eb] transition-colors duration-150"
            >
              Обновить
            </button>
          </div>

          {isLoading && (
            <p className="mt-6 text-[18px] text-[#F8721F]">
              Загрузка данных...
            </p>
          )}

          {error && (
            <p className="mt-6 text-[18px] text-red-500">{error}</p>
          )}

          {!isLoading && !error && (
            <div className="mt-6 overflow-x-auto">
              <div className="grid grid-cols-5 items-center bg-[#EDC3A9] rounded-[8px] px-6 py-4 text-[18px] font-bold text-[#02000F] min-w-[900px]">
                <p>Время</p>
                <p>Метод</p>
                <p>URL</p>
                <p>Статус</p>
                <p>Кэш</p>
              </div>

              <div className="mt-4 min-w-[900px]">
                {logs.map((log) => (
                  <div key={log.id}>
                    <div className="grid grid-cols-5 items-center px-6 py-8 text-[17px] text-[#02000F]">
                      <p>{new Date(log.timestamp).toLocaleTimeString()}</p>
                      <p>{log.method}</p>
                      <p>{log.url}</p>
                      <p>{log.status}</p>
                      <p>{log.cached ? "HIT" : "MISS"}</p>
                    </div>

                    <div className="mx-4 h-[3px] rounded-full bg-[#7C7B82]"></div>
                  </div>
                ))}

                {logs.length === 0 && (
                  <p className="px-6 py-8 text-[18px] text-[#6C6D71]">
                    Логи пока отсутствуют
                  </p>
                )}
              </div>
            </div>
          )}
        </section>
      </main>
    </section>
  );
};