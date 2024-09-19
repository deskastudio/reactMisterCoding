import { useCallback, useContext, useEffect, useState, FormEvent } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./BiodataForm.css";
import { Biodata } from "../../model/biodata";
import { BiodataContext } from "../../context/biodataContext";

const BiodataForm = () => {
  const defaultState: Biodata = {
    nama: "",
    email: "",
    phone: "",
  };
  const [form, setForm] = useState<Biodata>(defaultState);
  const { setBiodata } = useContext(BiodataContext);

  const getListBiodata = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:3001/biodata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data) {
        setBiodata(data);
      }
    } catch (err) {
      console.error("Error fetching biodata:", err);
    }
  }, [setBiodata]); // Tambahkan setBiodata sebagai dependency

  useEffect(() => {
    getListBiodata();
  }, [getListBiodata]); // Tambahkan getListBiodata sebagai dependency

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:3001/biodata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        alert("Post data berhasil");
        getListBiodata(); // Refresh list after post
      })
      .catch(() => {
        alert("Post data error");
      });
  };

  return (
    <>
      <form className="latihan_form" onSubmit={handleSubmit}>
        <h2>Form Biodata</h2>
        <div className="latihan_form_item">
          <label htmlFor="">Nama</label>
          <Input
            value={form?.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            style={{ marginLeft: 10 }}
            placeholder="Masukan Nama"
            required
          />
        </div>
        <div className="latihan_form_item">
          <label htmlFor="">Email</label>
          <Input
            value={form?.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            style={{ marginLeft: 10 }}
            placeholder="Masukan Email"
          />
        </div>
        <div className="latihan_form_item">
          <label htmlFor="">Telephon</label>
          <Input
            value={form?.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={{ marginLeft: 10 }}
            placeholder="Masukan Telephon"
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <Button label="Submit" />
        </div>
      </form>
    </>
  );
};

export default BiodataForm;
