import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { addAppointment } from "../features/appointments/appointmentsSlice";

import logo from "../assets/icons/logoWindow.png";
import women from "../assets/images/women.png";
import wave from "../assets/images/shape.png";
import sym from "../assets/icons/appointment icon 1 2.png";
import ukol from "../assets/icons/ukol.png";

interface FormErrors {
  fullName?: string;
  phone?: string;
  petName?: string;
  petType?: string;
  service?: string;
  date?: string;
  time?: string;
}

export const AppointmentPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const formatDate = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);

    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
    return `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4)}`;
  };

  const formatPhone = (value: string) => {
    let cleaned = value.replace(/[^\d+]/g, "");

    if (cleaned.includes("+")) {
      cleaned = "+" + cleaned.replace(/\+/g, "");
    }

    return cleaned.slice(0, 16);
  };

  const isValidPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 11;
  };

  const isValidFullName = (value: string) => {
    const normalized = value.trim();
    return /^[А-Яа-яЁёA-Za-z\s-]{2,}$/.test(normalized);
  };

  const isValidPetName = (value: string) => {
    const normalized = value.trim();
    return /^[А-Яа-яЁёA-Za-z\s-]{2,}$/.test(normalized);
  };

  const parseDate = (value: string) => {
    const [dayStr, monthStr, yearStr] = value.split(".");
    const day = Number(dayStr);
    const month = Number(monthStr);
    const year = Number(yearStr);

    return { day, month, year };
  };

  const isValidDate = (value: string) => {
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value)) return false;

    const { day, month, year } = parseDate(value);

    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    if (year < 2024 || year > 2100) return false;

    const dateObj = new Date(year, month - 1, day);

    return (
      dateObj.getFullYear() === year &&
      dateObj.getMonth() === month - 1 &&
      dateObj.getDate() === day
    );
  };

  const isPastDate = (value: string) => {
    if (!isValidDate(value)) return false;

    const { day, month, year } = parseDate(value);
    const inputDate = new Date(year, month - 1, day);
    inputDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return inputDate < today;
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Введите ФИО";
    } else if (!isValidFullName(fullName)) {
      newErrors.fullName = "ФИО должно содержать только буквы, пробелы и дефис";
    }

    if (!phone.trim()) {
      newErrors.phone = "Введите номер телефона";
    } else if (!isValidPhone(phone)) {
      newErrors.phone = "Введите корректный номер телефона";
    }

    if (!petName.trim()) {
      newErrors.petName = "Введите имя питомца";
    } else if (!isValidPetName(petName)) {
      newErrors.petName = "Имя питомца должно содержать только буквы, пробелы и дефис";
    }

    if (!petType.trim()) newErrors.petType = "Выберите вид питомца";
    if (!service.trim()) newErrors.service = "Выберите услугу";

    if (!date.trim()) {
      newErrors.date = "Введите дату";
    } else if (!isValidDate(date)) {
      newErrors.date = "Введите корректную дату в формате дд.мм.гггг";
    } else if (isPastDate(date)) {
      newErrors.date = "Нельзя выбрать прошедшую дату";
    }

    if (!time.trim()) newErrors.time = "Выберите время";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAppointmentSubmit = () => {
    if (!validateForm()) return;

    const newAppointment = {
      id: Date.now().toString(),
      doctorName: "Анна Сергеевна",
      ownerFullName: fullName,
      phone,
      petName,
      petType,
      service,
      date,
      time,
      status: "planned" as const,
    };

    dispatch(addAppointment(newAppointment));
    navigate("/patient");
  };

  return (
    <section className="relative px-12 py-6 pb-30">
      <img src={logo} alt="лого" className="h-[80px]" />
      <img
        src={wave}
        alt="волна"
        className="absolute top-0 right-0 h-[170px] opacity-90"
      />

      <h1 className="mt-6 text-[68px] font-sans font-semibold text-[#02000F]">
        Запишитесь на приём
      </h1>

      <p className="mt-4 text-[18px] text-[#6C6D71] font-sans font-normal">
        Если у вас остались вопросы - свяжитесь с нами
      </p>

      <img
        src={women}
        alt="женщина и собака"
        className="absolute h-[624px] mt-20 left-[0%]"
      />

      <div className="flex flex-col mt-20 w-[755px] min-h-[615px] bg-[#F6F2ED] rounded-[24px] ml-[45%] p-15">
        <div>
          <div className="grid grid-cols-3 gap-5">
            <button
              type="button"
              onClick={() => {
                setService("Стрижка");
                setErrors((prev) => ({ ...prev, service: undefined }));
              }}
              className={`h-[112px] w-[200px] rounded-[16px] relative border ${
                service === "Стрижка"
                  ? "bg-[#FFF1E8] border-[#F8721F]"
                  : "bg-[#FFFFFF] border-transparent"
              }`}
            >
              <img src={sym} alt="стрижка" className="absolute pl-20 pt-5" />
              <p className="text-[18px] font-sans font-semibold text-[#02000F] text-center pt-15">
                Стрижка
              </p>
            </button>

            <button
              type="button"
              onClick={() => {
                setService("Осмотр");
                setErrors((prev) => ({ ...prev, service: undefined }));
              }}
              className={`h-[112px] w-[200px] rounded-[16px] relative border ${
                service === "Осмотр"
                  ? "bg-[#FFF1E8] border-[#F8721F]"
                  : "bg-[#FFFFFF] border-transparent"
              }`}
            >
              <img src={sym} alt="осмотр" className="absolute pl-20 pt-5" />
              <p className="text-[18px] font-sans font-semibold text-[#02000F] text-center pt-15">
                Осмотр
              </p>
            </button>

            <button
              type="button"
              onClick={() => {
                setService("Вакцинация");
                setErrors((prev) => ({ ...prev, service: undefined }));
              }}
              className={`h-[112px] w-[200px] rounded-[16px] relative border ${
                service === "Вакцинация"
                  ? "bg-[#FFF1E8] border-[#F8721F]"
                  : "bg-[#FFFFFF] border-transparent"
              }`}
            >
              <img src={ukol} alt="вакцинация" className="absolute pl-20 pt-5" />
              <p className="text-[18px] font-sans font-semibold text-[#02000F] text-center pt-15">
                Вакцинация
              </p>
            </button>
          </div>

          {errors.service && (
            <p className="mt-2 text-[14px] text-red-500 font-sans">
              {errors.service}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-5 mt-15">
          <div>
            <input
              type="text"
              placeholder="ФИО"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setErrors((prev) => ({ ...prev, fullName: undefined }));
              }}
              className="h-[75px] w-full rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
            />
            {errors.fullName && (
              <p className="mt-2 text-[14px] text-red-500 font-sans">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="+7"
              value={phone}
              onChange={(e) => {
                setPhone(formatPhone(e.target.value));
                setErrors((prev) => ({ ...prev, phone: undefined }));
              }}
              className="h-[75px] w-full rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
            />
            {errors.phone && (
              <p className="mt-2 text-[14px] text-red-500 font-sans">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Имя питомца"
              value={petName}
              onChange={(e) => {
                setPetName(e.target.value);
                setErrors((prev) => ({ ...prev, petName: undefined }));
              }}
              className="h-[75px] w-full rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
            />
            {errors.petName && (
              <p className="mt-2 text-[14px] text-red-500 font-sans">
                {errors.petName}
              </p>
            )}
          </div>

          <div>
            <select
              value={petType}
              onChange={(e) => {
                setPetType(e.target.value);
                setErrors((prev) => ({ ...prev, petType: undefined }));
              }}
              className="h-[75px] w-full rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC] text-[#7A7A7A]"
            >
              <option value="">Выберите вид питомца</option>
              <option value="Собаки">Собаки</option>
              <option value="Кошки">Кошки</option>
              <option value="Грызуны">Грызуны</option>
              <option value="Птицы">Птицы</option>
            </select>
            {errors.petType && (
              <p className="mt-2 text-[14px] text-red-500 font-sans">
                {errors.petType}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="дд.мм.гггг"
              value={date}
              onChange={(e) => {
                setDate(formatDate(e.target.value));
                setErrors((prev) => ({ ...prev, date: undefined }));
              }}
              className="h-[75px] w-full rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
            />
            {errors.date && (
              <p className="mt-2 text-[14px] text-red-500 font-sans">
                {errors.date}
              </p>
            )}
          </div>

          <div>
            <select
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                setErrors((prev) => ({ ...prev, time: undefined }));
              }}
              className="h-[75px] w-full rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC] text-[#7A7A7A]"
            >
              <option value="">Выберите время</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
            {errors.time && (
              <p className="mt-2 text-[14px] text-red-500 font-sans">
                {errors.time}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={handleAppointmentSubmit}
            className="w-[320px] h-[58px] rounded-[50px] bg-[#F8721F] text-white text-[18px] font-sans font-medium hover:bg-[#f59a62] transition-colors duration-150"
          >
            Записаться
          </button>
        </div>
      </div>
    </section>
  );
};