// src/pages/RegisterPage.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register, type RegisterPayload } from "../services/authService";

export default function RegisterPage() {
  const nav = useNavigate();
  const [form, setForm] = useState<RegisterPayload>({
    student_id: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    faculty: "",
    department: "",
  });
  const [error, setError]     = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await register(form);
      if (res.data.success) {
        // ลงทะเบียนสำเร็จ → ไปหน้าล็อกอิน
        nav("/login");
      } else {
        setError(res.data.message || "ลงทะเบียนไม่สำเร็จ");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "เกิดข้อผิดพลาด");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-center">ลงทะเบียน</h2>
        {error && <div className="text-red-600">{error}</div>}

        <input name="student_id" placeholder="รหัสนิสิต"
               value={form.student_id} onChange={handleChange}
               required className="w-full px-4 py-2 border rounded-lg"/>

        <input type="password" name="password" placeholder="รหัสผ่าน"
               value={form.password} onChange={handleChange}
               required className="w-full px-4 py-2 border rounded-lg"/>

        <input name="first_name" placeholder="ชื่อจริง"
               value={form.first_name} onChange={handleChange}
               required className="w-full px-4 py-2 border rounded-lg"/>

        <input name="last_name" placeholder="นามสกุล"
               value={form.last_name} onChange={handleChange}
               required className="w-full px-4 py-2 border rounded-lg"/>

        <input name="email" type="email" placeholder="อีเมล"
               value={form.email} onChange={handleChange}
               required className="w-full px-4 py-2 border rounded-lg"/>

        <input name="faculty" placeholder="คณะ"
               value={form.faculty} onChange={handleChange}
               required className="w-full px-4 py-2 border rounded-lg"/>

        <input name="department" placeholder="สาขา"
               value={form.department} onChange={handleChange}
               required className="w-full px-4 py-2 border rounded-lg"/>

        <button type="submit" disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg">
          {loading ? "กำลังสมัคร…" : "ลงทะเบียน"}
        </button>

        <p className="text-center text-sm text-gray-600">
          มีบัญชีแล้ว?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            เข้าสู่ระบบ
          </Link>
        </p>
      </form>
    </div>
  );
}
