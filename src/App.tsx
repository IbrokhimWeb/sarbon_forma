import { Box, TextField } from "@mui/material";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    company: "",
  });
  const { company } = data;

  return (
    <Box className="w-ful h-screen flex flex-col gap-5 py-10 px-[35%] overflow-y-auto">
      <h1 className="text-2xl">Savollarga to'liq javob bering</h1>
      <form onSubmit={() => {}} className="flex flex-col gap-6">
        <TextField
          required
          fullWidth
          value={company}
          name="company"
          type="text"
          label="Kompanya nomi"
        />
        <TextField
          required
          fullWidth
          value={company}
          name="company"
          type="text"
          label="Faoliyat turi"
        />
        <TextField
          required
          fullWidth
          value={company}
          name="company"
          type="text"
          label="Kompanya bozorda necha yillik tajribaga ega? "
        />
        <TextField
          required
          fullWidth
          value={company}
          name="company"
          type="text"
          label="Kompanyada marketing bo'limi yoki marketolog bormi?"
        />
        <TextField
          required
          fullWidth
          value={company}
          name="company"
          type="text"
          label="Biznesingizni qayerida marketinga extiyoz sezyabsiz?"
        />
      </form>
    </Box>
  );
}

export default App;
