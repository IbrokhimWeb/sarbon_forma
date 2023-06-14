import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FormEvent, useState, forwardRef } from "react";
import { IMaskInput } from "react-imask";

function App() {
  const [data, setData] = useState({
    kompanya: "",
    turi: "",
    tajriba: "",
    marketing: "",
    muamo: "",
    ustunlik: "",
    kutmoqda: "",
    raqobatchilari: "",
    reklama_type: "",
    phone: "",
    fish: "",
  });
  const {
    kompanya,
    turi,
    tajriba,
    marketing,
    muamo,
    ustunlik,
    kutmoqda,
    raqobatchilari,
    phone,
    fish,
    reklama_type,
  } = data;

  const inputs = [
    {
      id: 1,
      select: false,
      value: kompanya,
      name: "kompanya",
      type: "text",
      label: "Kompanya nomi",
    },
    {
      id: 2,
      select: false,
      value: turi,
      name: "turi",
      type: "text",
      label: "Faoliyat turi",
    },
    {
      id: 3,
      select: false,
      value: tajriba,
      name: "tajriba",
      type: "text",
      label: "Kompaniya bozorda necha yillik tajribaga ega?",
    },
    {
      id: 4,
      select: true,
      value: marketing,
      name: "marketing",
      type: "text",
      label: "Kompaniya marketolog yoki marketing xizmatidan foydalanganmi?",
    },
    {
      id: 5,
      select: false,
      value: muamo,
      name: "muamo",
      type: "text",
      label: "Biznesingizni qayerida og'riq sezyabsiz?",
    },
    {
      id: 6,
      select: false,
      value: ustunlik,
      name: "ustunlik",
      type: "text",
      label: "Kompanyangizning kuchli taraflari?",
    },
    {
      id: 7,
      select: false,
      value: kutmoqda,
      name: "kutmoqda",
      type: "text",
      label: "Siz bizdan nimalar kutyabsiz?",
    },
    {
      id: 8,
      select: false,
      value: raqobatchilari,
      name: "raqobatchilari",
      type: "text",
      label: "Asosiy raqobatchilaringiz kim?",
    },
    {
      id: 9,
      select: false,
      value: reklama_type,
      name: "reklama_type",
      type: "text",
      label: "Reklamaning qaysi turidan foydalangansiz?",
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let myText = `▪️ Kompanya nomi: <b> ${kompanya}</b> %0A`;
    myText += `▪️ Kompanya turi: <b> ${turi}</b> %0A`;
    myText += `▪️ Ish tajribasi: <b> ${tajriba}</b> %0A`;
    myText += `▪️ Marketingdan foydalanganmi: <b> ${
      marketing ? "Ha" : "Yo'q"
    }</b> %0A`;
    myText += `▪️ Qanday muamosi bor: <b> ${muamo}</b> %0A`;
    myText += `▪️ Qanday kuchli tomini: <b> ${ustunlik}</b> %0A`;
    myText += `▪️ Bizdan nima kutmoqda: <b> ${kutmoqda}</b> %0A`;
    myText += `▪️ Bizdan nima kutmoqda: <b> ${kutmoqda}</b> %0A`;
    myText += `▪️ Foydalanilgan reklama turi: <b> ${reklama_type}</b> %0A`;
    myText += `▪️ Masul shaxs FISH: <b> ${fish}</b> %0A`;
    myText += `▪️ Masul shaxs raqami: <b> +${phone}</b> %0A`;

    const api = new XMLHttpRequest();
    const token = "5411625646:AAExS2kdXEkvmD3LZhtx4hv-lVgeD2Hix8U";
    const chatId = "-1001690438003";

    api.open(
      "GET",
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${myText}&parse_mode=html`,
      true
    );
    api.send();
    alert("Siz Kiritgan Malumotlar Adminga Yuborildi");
  };

  return (
    <Box className="w-ful h-screen flex flex-col gap-5 py-10 px-96 overflow-y-auto max-[1378px]:px-80 max-[1234px]:px-52 max-[1000px]:px-28 max-[811px]:px-10 max-[500px]:px-5">
      <h1 className="text-2xl text-center">Savollarga to'liq javob bering</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {inputs?.map(({ id, value, name, type, label, select }) => (
          <Box key={id} className="flex items-center gap-3">
            <h1 className="w-12 font-medium text-xl text-right max-[500px]:w-auto max-[500px]:text-sm">
              {id}
            </h1>
            {select ? (
              <FormControl fullWidth required>
                <InputLabel id={name}>{label}</InputLabel>
                <Select
                  labelId={name}
                  value={value}
                  label={label}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, [name]: +e.target.value }))
                  }
                >
                  <MenuItem value={0}>Ha</MenuItem>
                  <MenuItem value={1}>Yo'q</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <TextField
                required
                fullWidth
                value={value}
                name={name}
                type={type}
                label={label}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, [name]: e.target.value }))
                }
              />
            )}
          </Box>
        ))}
        <h1 className="text-center">Masul shaxs malumotlari</h1>
        <Box key={17623} className="flex items-center gap-3">
          <h1 className="w-12 font-medium text-xl text-right max-[500px]:w-auto max-[500px]:text-sm">
            10
          </h1>
          <TextField
            required
            fullWidth
            label="FISH"
            onChange={(e) =>
              setData((prev) => ({ ...prev, fish: e.target.value }))
            }
          />
        </Box>
        <Box key={17623} className="flex items-center gap-3">
          <h1 className="w-12 font-medium text-xl text-right max-[500px]:w-auto max-[500px]:text-sm">
            11
          </h1>
          <TextField
            required
            fullWidth
            value={phone}
            InputProps={{
              inputComponent: TextMaskCustom as any,
            }}
            label="Telefon raqami"
            onChange={(e) =>
              setData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </Box>
        <Box className="w-full flex items-center justify-end">
          <Button type="submit" variant="contained" className="w-48">
            YUBORISH
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default App;
interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const TextMaskCustom = forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+000(00) 000-00-00"
        definitions={{
          "#": /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);
