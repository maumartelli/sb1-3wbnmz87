import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { X } from 'lucide-react';
import { subscribeToNewsletter } from '../../services/newsletter';

const countryNames = {
  ext: "ramal",
  country: "País do número de telefone",
  phone: "Telefone",
  AB: "Abecásia",
  AC: "Ilha de Ascensão",
  AD: "Andorra",
  AE: "Emirados Árabes Unidos",
  AF: "Afeganistão",
  AG: "Antígua e Barbuda",
  AI: "Anguila",
  AL: "Albânia",
  AM: "Armênia",
  AO: "Angola",
  AQ: "Antártida",
  AR: "Argentina",
  AS: "Samoa Americana",
  AT: "Áustria",
  AU: "Austrália",
  AW: "Aruba",
  AX: "Ilhas Aland",
  AZ: "Azerbaijão",
  BA: "Bósnia e Herzegovina",
  BB: "Barbados",
  BD: "Bangladesh",
  BE: "Bélgica",
  BF: "Burkina Faso",
  BG: "Bulgária",
  BH: "Bahrein",
  BI: "Burundi",
  BJ: "Benin",
  BL: "São Bartolomeu",
  BM: "Bermudas",
  BN: "Brunei",
  BO: "Bolívia",
  BQ: "Bonaire, Santo Eustáquio e Saba",
  BR: "Brasil",
  BS: "Bahamas",
  BT: "Butão",
  BV: "Ilha Bouvet",
  BW: "Botsuana",
  BY: "Bielorrússia",
  BZ: "Belize",
  CA: "Canadá",
  CC: "Ilhas Cocos",
  CD: "República Democrática do Congo",
  CF: "República Centro-Africana",
  CG: "Congo",
  CH: "Suíça",
  CI: "Costa do Marfim",
  CK: "Ilhas Cook",
  CL: "Chile",
  CM: "Camarões",
  CN: "China",
  CO: "Colômbia",
  CR: "Costa Rica",
  CU: "Cuba",
  CV: "Cabo Verde",
  CW: "Curaçao",
  CX: "Ilha Christmas",
  CY: "Chipre",
  CZ: "República Tcheca",
  DE: "Alemanha",
  DJ: "Djibuti",
  DK: "Dinamarca",
  DM: "Dominica",
  DO: "República Dominicana",
  DZ: "Argélia",
  EC: "Equador",
  EE: "Estônia",
  EG: "Egito",
  EH: "Saara Ocidental",
  ER: "Eritreia",
  ES: "Espanha",
  ET: "Etiópia",
  FI: "Finlândia",
  FJ: "Fiji",
  FK: "Ilhas Malvinas",
  FM: "Estados Federados da Micronésia",
  FO: "Ilhas Faroé",
  FR: "França",
  GA: "Gabão",
  GB: "Reino Unido",
  GD: "Granada",
  GE: "Geórgia",
  GF: "Guiana Francesa",
  GG: "Guernsey",
  GH: "Gana",
  GI: "Gibraltar",
  GL: "Groenlândia",
  GM: "Gâmbia",
  GN: "Guiné",
  GP: "Guadalupe",
  GQ: "Guiné Equatorial",
  GR: "Grécia",
  GS: "Geórgia do Sul e Ilhas Sandwich do Sul",
  GT: "Guatemala",
  GU: "Guam",
  GW: "Guiné-Bissau",
  GY: "Guiana",
  HK: "Hong Kong",
  HM: "Ilha Heard e Ilhas McDonald",
  HN: "Honduras",
  HR: "Croácia",
  HT: "Haiti",
  HU: "Hungria",
  ID: "Indonésia",
  IE: "Irlanda",
  IL: "Israel",
  IM: "Ilha de Man",
  IN: "Índia",
  IO: "Território Britânico do Oceano Índico",
  IQ: "Iraque",
  IR: "Irã",
  IS: "Islândia",
  IT: "Itália",
  JE: "Jersey",
  JM: "Jamaica",
  JO: "Jordânia",
  JP: "Japão",
  KE: "Quênia",
  KG: "Quirguistão",
  KH: "Camboja",
  KI: "Kiribati",
  KM: "Comores",
  KN: "São Cristóvão e Nevis",
  KP: "Coreia do Norte",
  KR: "Coreia do Sul",
  KW: "Kuwait",
  KY: "Ilhas Cayman",
  KZ: "Cazaquistão",
  LA: "Laos",
  LB: "Líbano",
  LC: "Santa Lúcia",
  LI: "Liechtenstein",
  LK: "Sri Lanka",
  LR: "Libéria",
  LS: "Lesoto",
  LT: "Lituânia",
  LU: "Luxemburgo",
  LV: "Letônia",
  LY: "Líbia",
  MA: "Marrocos",
  MC: "Mônaco",
  MD: "Moldávia",
  ME: "Montenegro",
  MF: "São Martinho (Parte Francesa)",
  MG: "Madagascar",
  MH: "Ilhas Marshall",
  MK: "Macedônia do Norte",
  ML: "Mali",
  MM: "Myanmar",
  MN: "Mongólia",
  MO: "Macau",
  MP: "Ilhas Marianas do Norte",
  MQ: "Martinica",
  MR: "Mauritânia",
  MS: "Montserrat",
  MT: "Malta",
  MU: "Maurício",
  MV: "Maldivas",
  MW: "Malawi",
  MX: "México",
  MY: "Malásia",
  MZ: "Moçambique",
  NA: "Namíbia",
  NC: "Nova Caledônia",
  NE: "Níger",
  NF: "Ilha Norfolk",
  NG: "Nigéria",
  NI: "Nicarágua",
  NL: "Países Baixos",
  NO: "Noruega",
  NP: "Nepal",
  NR: "Nauru",
  NU: "Niue",
  NZ: "Nova Zelândia",
  OM: "Omã",
  OS: "Ossétia do Sul",
  PA: "Panamá",
  PE: "Peru",
  PF: "Polinésia Francesa",
  PG: "Papua Nova Guiné",
  PH: "Filipinas",
  PK: "Paquistão",
  PL: "Polônia",
  PM: "São Pedro e Miquelão",
  PN: "Pitcairn",
  PR: "Porto Rico",
  PS: "Palestina",
  PT: "Portugal",
  PW: "Palau",
  PY: "Paraguai",
  QA: "Catar",
  RE: "Reunião",
  RO: "Romênia",
  RS: "Sérvia",
  RU: "Rússia",
  RW: "Ruanda",
  SA: "Arábia Saudita",
  SB: "Ilhas Salomão",
  SC: "Seychelles",
  SD: "Sudão",
  SE: "Suécia",
  SG: "Singapura",
  SH: "Santa Helena",
  SI: "Eslovênia",
  SJ: "Svalbard e Jan Mayen",
  SK: "Eslováquia",
  SL: "Serra Leoa",
  SM: "San Marino",
  SN: "Senegal",
  SO: "Somália",
  SR: "Suriname",
  SS: "Sudão do Sul",
  ST: "São Tomé e Príncipe",
  SV: "El Salvador",
  SX: "São Martinho (Parte Holandesa)",
  SY: "Síria",
  SZ: "Suazilândia",
  TA: "Tristão da Cunha",
  TC: "Ilhas Turks e Caicos",
  TD: "Chade",
  TF: "Territórios Franceses do Sul",
  TG: "Togo",
  TH: "Tailândia",
  TJ: "Tajiquistão",
  TK: "Tokelau",
  TL: "Timor-Leste",
  TM: "Turcomenistão",
  TN: "Tunísia",
  TO: "Tonga",
  TR: "Turquia",
  TT: "Trinidad e Tobago",
  TV: "Tuvalu",
  TW: "Taiwan",
  TZ: "Tanzânia",
  UA: "Ucrânia",
  UG: "Uganda",
  UM: "Ilhas Menores Distantes dos Estados Unidos",
  US: "Estados Unidos",
  UY: "Uruguai",
  UZ: "Uzbequistão",
  VA: "Vaticano",
  VC: "São Vicente e Granadinas",
  VE: "Venezuela",
  VG: "Ilhas Virgens Britânicas",
  VI: "Ilhas Virgens Americanas",
  VN: "Vietnã",
  VU: "Vanuatu",
  WF: "Wallis e Futuna",
  WS: "Samoa",
  XK: "Kosovo",
  YE: "Iêmen",
  YT: "Mayotte",
  ZA: "África do Sul",
  ZM: "Zâmbia",
  ZW: "Zimbábue",
  ZZ: "Internacional"
};

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+55',
    acceptTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const result = await subscribeToNewsletter(formData);

    setIsSubmitting(false);
    setSubmitStatus({
      type: result.success ? 'success' : 'error',
      message: result.message
    });

    if (result.success) {
      setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '+55',
          acceptTerms: false
        });
        setSubmitStatus({ type: null, message: '' });
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6">Cadastre-se para Novidades</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <PhoneInput
              international
              defaultCountry="BR"
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value || '' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              disabled={isSubmitting}
              labels={countryNames}
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="acceptTerms"
              required
              className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              disabled={isSubmitting}
            />
            <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-600">
              Aceito os termos de serviço da Supreme Brasil e concordo em receber comunicações.
            </label>
          </div>

          {submitStatus.message && (
            <div
              className={`p-3 rounded-md ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Cadastrar'}
          </button>
        </form>
      </div>
    </div>
  );
}