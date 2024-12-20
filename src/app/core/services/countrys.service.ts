import { Injectable, signal, WritableSignal } from '@angular/core';
import { CountryModel } from './country.model';

@Injectable({
  providedIn: 'root'
})
export class CountrysService {
  private readonly countrys: WritableSignal<CountryModel[]> = signal(
    [
      {
        abbreviation: "DZ",
        country: "Algeria",
        region: "Africa"
      },
      {
        abbreviation: "AO",
        country: "Angola",
        region: "Africa"
      },
      {
        abbreviation: "BJ",
        country: "Benin",
        region: "Africa"
      },
      {
        abbreviation: "BW",
        country: "Botswana",
        region: "Africa"
      },
      {
        abbreviation: "BF",
        country: "Burkina Faso",
        region: "Africa"
      },
      {
        abbreviation: "BI",
        country: "Burundi",
        region: "Africa"
      },
      {
        abbreviation: "CV",
        country: "Cabo Verde",
        region: "Africa"
      },
      {
        abbreviation: "CM",
        country: "Cameroon",
        region: "Africa"
      },
      {
        abbreviation: "CF",
        country: "Central African Republic (the)",
        region: "Africa"
      },
      {
        abbreviation: "TD",
        country: "Chad",
        region: "Africa"
      },
      {
        abbreviation: "KM",
        country: "Comoros (the)",
        region: "Africa"
      },
      {
        abbreviation: "CD",
        country: "Congo (the Democratic Republic of the)",
        region: "Africa"
      },
      {
        abbreviation: "CG",
        country: "Congo (the)",
        region: "Africa"
      }, {
        abbreviation: "CI",
        country: "Côte d'Ivoire",
        region: "Africa"
      }, {
        abbreviation: "DJ",
        country: "Djibouti",
        region: "Africa"
      }, {
        abbreviation: "EG",
        country: "Egypt",
        region: "Africa"
      }, {
        abbreviation: "GQ",
        country: "Equatorial Guinea",
        region: "Africa"
      }, {
        abbreviation: "ER",
        country: "Eritrea",
        region: "Africa"
      }, {
        abbreviation: "SZ",
        country: "Eswatini",
        region: "Africa"
      }, {
        abbreviation: "ET",
        country: "Ethiopia",
        region: "Africa"
      }, {
        abbreviation: "GA",
        country: "Gabon",
        region: "Africa"
      }, {
        abbreviation: "GM",
        country: "Gambia (the)",
        region: "Africa"
      }, {
        abbreviation: "GH",
        country: "Ghana",
        region: "Africa"
      }, {
        abbreviation: "GN",
        country: "Guinea",
        region: "Africa"
      }, {
        abbreviation: "GW",
        country: "Guinea-Bissau",
        region: "Africa"
      }, {
        abbreviation: "KE",
        country: "Kenya",
        region: "Africa"
      }, {
        abbreviation: "LS",
        country: "Lesotho",
        region: "Africa"
      }, {
        abbreviation: "LR",
        country: "Liberia",
        region: "Africa"
      }, {
        abbreviation: "LY",
        country: "Libya",
        region: "Africa"
      }, {
        abbreviation: "MG",
        country: "Madagascar",
        region: "Africa"
      }, {
        abbreviation: "MW",
        country: "Malawi",
        region: "Africa"
      }, {
        abbreviation: "ML",
        country: "Mali",
        region: "Africa"
      }, {
        abbreviation: "MR",
        country: "Mauritania",
        region: "Africa"
      }, {
        abbreviation: "MU",
        country: "Mauritius",
        region: "Africa"
      }, {
        abbreviation: "YT",
        country: "Mayotte",
        region: "Africa"
      }, {
        abbreviation: "MA",
        country: "Morocco",
        region: "Africa"
      }, {
        abbreviation: "MZ",
        country: "Mozambique",
        region: "Africa"
      }, {
        abbreviation: "NA",
        country: "Namibia",
        region: "Africa"
      }, {
        abbreviation: "NE",
        country: "Niger (the)",
        region: "Africa"
      }, {
        abbreviation: "NG",
        country: "Nigeria",
        region: "Africa"
      }, {
        abbreviation: "RE",
        country: "Réunion",
        region: "Africa"
      }, {
        abbreviation: "RW",
        country: "Rwanda",
        region: "Africa"
      }, {
        abbreviation: "SH",
        country: "Saint Helena, Ascension and Tristan da Cunha",
        region: "Africa"
      }, {
        abbreviation: "ST",
        country: "Sao Tome and Principe",
        region: "Africa"
      }, {
        abbreviation: "SN",
        country: "Senegal",
        region: "Africa"
      }, {
        abbreviation: "SC",
        country: "Seychelles",
        region: "Africa"
      }, {
        abbreviation: "SL",
        country: "Sierra Leone",
        region: "Africa"
      }, {
        abbreviation: "SO",
        country: "Somalia",
        region: "Africa"
      }, {
        abbreviation: "ZA",
        country: "South Africa",
        region: "Africa"
      }, {
        abbreviation: "SS",
        country: "South Sudan",
        region: "Africa"
      }, {
        abbreviation: "SD",
        country: "Sudan (the)",
        region: "Africa"
      }, {
        abbreviation: "TZ",
        country: "Tanzania, the United Republic of",
        region: "Africa"
      }, {
        abbreviation: "TG",
        country: "Togo",
        region: "Africa"
      }, {
        abbreviation: "TN",
        country: "Tunisia",
        region: "Africa"
      }, {
        abbreviation: "UG",
        country: "Uganda",
        region: "Africa"
      }, {
        abbreviation: "EH",
        country: "Western Sahara*",
        region: "Africa"
      }, {
        abbreviation: "ZM",
        country: "Zambia",
        region: "Africa"
      }, {
        abbreviation: "ZW",
        country: "Zimbabwe",
        region: "Africa"
      }, {
        abbreviation: "AQ",
        country: "Antarctica",
        region: "Antarctic"
      }, {
        abbreviation: "BV",
        country: "Bouvet Island",
        region: "Antarctic"
      }, {
        abbreviation: "TF",
        country: "French Southern Territories (the)",
        region: "Antarctic"
      }, {
        abbreviation: "HM",
        country: "Heard Island and McDonald Islands",
        region: "Antarctic"
      }, {
        abbreviation: "GS",
        country: "South Georgia and the South Sandwich Islands",
        region: "Antarctic"
      }, {
        abbreviation: "AF",
        country: "Afghanistan",
        region: "Asia"
      }, {
        abbreviation: "AM",
        country: "Armenia",
        region: "Asia"
      }, {
        abbreviation: "AZ",
        country: "Azerbaijan",
        region: "Asia"
      }, {
        abbreviation: "BD",
        country: "Bangladesh",
        region: "Asia"
      }, {
        abbreviation: "BT",
        country: "Bhutan",
        region: "Asia"
      }, {
        abbreviation: "IO",
        country: "British Indian Ocean Territory (the)",
        region: "Asia"
      }, {
        abbreviation: "BN",
        country: "Brunei Darussalam",
        region: "Asia"
      }, {
        abbreviation: "KH",
        country: "Cambodia",
        region: "Asia"
      }, {
        abbreviation: "CN",
        country: "China",
        region: "Asia"
      }, {
        abbreviation: "GE",
        country: "Georgia",
        region: "Asia"
      }, {
        abbreviation: "HK",
        country: "Hong Kong",
        region: "Asia"
      }, {
        abbreviation: "IN",
        country: "India",
        region: "Asia"
      }, {
        abbreviation: "ID",
        country: "Indonesia",
        region: "Asia"
      }, {
        abbreviation: "JP",
        country: "Japan",
        region: "Asia"
      }, {
        abbreviation: "KZ",
        country: "Kazakhstan",
        region: "Asia"
      }, {
        abbreviation: "KP",
        country: "Korea (the Democratic People's Republic of)",
        region: "Asia"
      }, {
        abbreviation: "KR",
        country: "Korea (the Republic of)",
        region: "Asia"
      }, {
        abbreviation: "KG",
        country: "Kyrgyzstan",
        region: "Asia"
      }, {
        abbreviation: "LA",
        country: "Lao People's Democratic Republic (the)",
        region: "Asia"
      }, {
        abbreviation: "MO",
        country: "Macao",
        region: "Asia"
      }, {
        abbreviation: "MY",
        country: "Malaysia",
        region: "Asia"
      }, {
        abbreviation: "MV",
        country: "Maldives",
        region: "Asia"
      }, {
        abbreviation: "MN",
        country: "Mongolia",
        region: "Asia"
      }, {
        abbreviation: "MM",
        country: "Myanmar",
        region: "Asia"
      }, {
        abbreviation: "NP",
        country: "Nepal",
        region: "Asia"
      }, {
        abbreviation: "PK",
        country: "Pakistan",
        region: "Asia"
      }, {
        abbreviation: "PH",
        country: "Philippines (the)",
        region: "Asia"
      }, {
        abbreviation: "SG",
        country: "Singapore",
        region: "Asia"
      }, {
        abbreviation: "LK",
        country: "Sri Lanka",
        region: "Asia"
      }, {
        abbreviation: "TW",
        country: "Taiwan (Province of China)",
        region: "Asia"
      }, {
        abbreviation: "TJ",
        country: "Tajikistan",
        region: "Asia"
      }, {
        abbreviation: "TH",
        country: "Thailand",
        region: "Asia"
      }, {
        abbreviation: "TL",
        country: "Timor-Leste",
        region: "Asia"
      }, {
        abbreviation: "TM",
        country: "Turkmenistan",
        region: "Asia"
      }, {
        abbreviation: "UZ",
        country: "Uzbekistan",
        region: "Asia"
      }, {
        abbreviation: "VN",
        country: "Viet Nam",
        region: "Asia"
      }, {
        abbreviation: "BZ",
        country: "Belize",
        region: "Central America"
      }, {
        abbreviation: "CR",
        country: "Costa Rica",
        region: "Central America"
      }, {
        abbreviation: "SV",
        country: "El Salvador",
        region: "Central America"
      }, {
        abbreviation: "GT",
        country: "Guatemala",
        region: "Central America"
      }, {
        abbreviation: "HN",
        country: "Honduras",
        region: "Central America"
      }, {
        abbreviation: "MX",
        country: "Mexico",
        region: "Central America"
      }, {
        abbreviation: "NI",
        country: "Nicaragua",
        region: "Central America"
      }, {
        abbreviation: "PA",
        country: "Panama",
        region: "Central America"
      }, {
        abbreviation: "AX",
        country: "Åland Islands",
        region: "Europe"
      }, {
        abbreviation: "AL",
        country: "Albania",
        region: "Europe"
      }, {
        abbreviation: "AD",
        country: "Andorra",
        region: "Europe"
      }, {
        abbreviation: "AT",
        country: "Austria",
        region: "Europe"
      }, {
        abbreviation: "BY",
        country: "Belarus",
        region: "Europe"
      }, {
        abbreviation: "BE",
        country: "Belgium",
        region: "Europe"
      }, {
        abbreviation: "BA",
        country: "Bosnia and Herzegovina",
        region: "Europe"
      }, {
        abbreviation: "BG",
        country: "Bulgaria",
        region: "Europe"
      }, {
        abbreviation: "HR",
        country: "Croatia",
        region: "Europe"
      }, {
        abbreviation: "CY",
        country: "Cyprus",
        region: "Europe"
      }, {
        abbreviation: "CZ",
        country: "Czechia",
        region: "Europe"
      }, {
        abbreviation: "DK",
        country: "Denmark",
        region: "Europe"
      }, {
        abbreviation: "EE",
        country: "Estonia",
        region: "Europe"
      }, {
        abbreviation: "FO",
        country: "Faroe Islands (the)",
        region: "Europe"
      }, {
        abbreviation: "FI",
        country: "Finland",
        region: "Europe"
      }, {
        abbreviation: "FR",
        country: "France",
        region: "Europe"
      }, {
        abbreviation: "DE",
        country: "Germany",
        region: "Europe"
      }, {
        abbreviation: "GI",
        country: "Gibraltar",
        region: "Europe"
      }, {
        abbreviation: "GR",
        country: "Greece",
        region: "Europe"
      }, {
        abbreviation: "GG",
        country: "Guernsey",
        region: "Europe"
      }, {
        abbreviation: "VA",
        country: "Holy See (the)",
        region: "Europe"
      }, {
        abbreviation: "HU",
        country: "Hungary",
        region: "Europe"
      }, {
        abbreviation: "IS",
        country: "Iceland",
        region: "Europe"
      }, {
        abbreviation: "IE",
        country: "Ireland",
        region: "Europe"
      }, {
        abbreviation: "IM",
        country: "Isle of Man",
        region: "Europe"
      }, {
        abbreviation: "IT",
        country: "Italy",
        region: "Europe"
      }, {
        abbreviation: "JE",
        country: "Jersey",
        region: "Europe"
      }, {
        abbreviation: "LV",
        country: "Latvia",
        region: "Europe"
      }, {
        abbreviation: "LI",
        country: "Liechtenstein",
        region: "Europe"
      }, {
        abbreviation: "LT",
        country: "Lithuania",
        region: "Europe"
      }, {
        abbreviation: "LU",
        country: "Luxembourg",
        region: "Europe"
      }, {
        abbreviation: "MT",
        country: "Malta",
        region: "Europe"
      }, {
        abbreviation: "MD",
        country: "Moldova (the Republic of)",
        region: "Europe"
      }, {
        abbreviation: "MC",
        country: "Monaco",
        region: "Europe"
      }, {
        abbreviation: "ME",
        country: "Montenegro",
        region: "Europe"
      }, {
        abbreviation: "NL",
        country: "Netherlands (the)",
        region: "Europe"
      }, {
        abbreviation: "MK",
        country: "North Macedonia",
        region: "Europe"
      }, {
        abbreviation: "NO",
        country: "Norway",
        region: "Europe"
      }, {
        abbreviation: "PL",
        country: "Poland",
        region: "Europe"
      }, {
        abbreviation: "PT",
        country: "Portugal",
        region: "Europe"
      }, {
        abbreviation: "RO",
        country: "Romania",
        region: "Europe"
      }, {
        abbreviation: "RU",
        country: "Russian Federation (the)",
        region: "Europe"
      }, {
        abbreviation: "SM",
        country: "San Marino",
        region: "Europe"
      }, {
        abbreviation: "RS",
        country: "Serbia",
        region: "Europe"
      }, {
        abbreviation: "SK",
        country: "Slovakia",
        region: "Europe"
      }, {
        abbreviation: "SI",
        country: "Slovenia",
        region: "Europe"
      }, {
        abbreviation: "ES",
        country: "Spain",
        region: "Europe"
      }, {
        abbreviation: "SJ",
        country: "Svalbard and Jan Mayen",
        region: "Europe"
      }, {
        abbreviation: "SE",
        country: "Sweden",
        region: "Europe"
      }, {
        abbreviation: "CH",
        country: "Switzerland",
        region: "Europe"
      }, {
        abbreviation: "TR",
        country: "Turkey",
        region: "Europe"
      }, {
        abbreviation: "UA",
        country: "Ukraine",
        region: "Europe"
      }, {
        abbreviation: "GB",
        country: "United Kingdom of Great Britain and Northern Ireland (the)",
        region: "Europe"
      }, {
        abbreviation: "BH",
        country: "Bahrain",
        region: "Middle East"
      }, {
        abbreviation: "IR",
        country: "Iran (Islamic Republic of)",
        region: "Middle East"
      }, {
        abbreviation: "IQ",
        country: "Iraq",
        region: "Middle East"
      }, {
        abbreviation: "IL",
        country: "Israel",
        region: "Middle East"
      }, {
        abbreviation: "JO",
        country: "Jordan",
        region: "Middle East"
      }, {
        abbreviation: "KW",
        country: "Kuwait",
        region: "Middle East"
      }, {
        abbreviation: "LB",
        country: "Lebanon",
        region: "Middle East"
      }, {
        abbreviation: "OM",
        country: "Oman",
        region: "Middle East"
      }, {
        abbreviation: "PS",
        country: "Palestine, State of",
        region: "Middle East"
      }, {
        abbreviation: "QA",
        country: "Qatar",
        region: "Middle East"
      }, {
        abbreviation: "SA",
        country: "Saudi Arabia",
        region: "Middle East"
      }, {
        abbreviation: "SY",
        country: "Syrian Arab Republic (the)",
        region: "Middle East"
      }, {
        abbreviation: "AE",
        country: "United Arab Emirates (the)",
        region: "Middle East"
      }, {
        abbreviation: "YE",
        country: "Yemen",
        region: "Middle East"
      }, {
        abbreviation: "BM",
        country: "Bermuda",
        region: "North America"
      }, {
        abbreviation: "CA",
        country: "Canada",
        region: "North America"
      }, {
        abbreviation: "GL",
        country: "Greenland",
        region: "North America"
      }, {
        abbreviation: "PM",
        country: "Saint Pierre and Miquelon",
        region: "North America"
      }, {
        abbreviation: "US",
        country: "United States of America (the)",
        region: "North America"
      }, {
        abbreviation: "AS",
        country: "American Samoa",
        region: "Oceania"
      }, {
        abbreviation: "AU",
        country: "Australia",
        region: "Oceania"
      }, {
        abbreviation: "CX",
        country: "Christmas Island",
        region: "Oceania"
      }, {
        abbreviation: "CC",
        country: "Cocos (Keeling) Islands (the)",
        region: "Oceania"
      }, {
        abbreviation: "CK",
        country: "Cook Islands (the)",
        region: "Oceania"
      }, {
        abbreviation: "FJ",
        country: "Fiji",
        region: "Oceania"
      }, {
        abbreviation: "PF",
        country: "French Polynesia",
        region: "Oceania"
      }, {
        abbreviation: "GU",
        country: "Guam",
        region: "Oceania"
      }, {
        abbreviation: "KI",
        country: "Kiribati",
        region: "Oceania"
      }, {
        abbreviation: "MH",
        country: "Marshall Islands (the)",
        region: "Oceania"
      }, {
        abbreviation: "FM",
        country: "Micronesia (Federated States of)",
        region: "Oceania"
      }, {
        abbreviation: "NR",
        country: "Nauru",
        region: "Oceania"
      }, {
        abbreviation: "NC",
        country: "New Caledonia",
        region: "Oceania"
      }, {
        abbreviation: "NZ",
        country: "New Zealand",
        region: "Oceania"
      }, {
        abbreviation: "NU",
        country: "Niue",
        region: "Oceania"
      }, {
        abbreviation: "NF",
        country: "Norfolk Island",
        region: "Oceania"
      }, {
        abbreviation: "MP",
        country: "Northern Mariana Islands (the)",
        region: "Oceania"
      }, {
        abbreviation: "PW",
        country: "Palau",
        region: "Oceania"
      }, {
        abbreviation: "PG",
        country: "Papua New Guinea",
        region: "Oceania"
      }, {
        abbreviation: "PN",
        country: "Pitcairn",
        region: "Oceania"
      }, {
        abbreviation: "WS",
        country: "Samoa",
        region: "Oceania"
      }, {
        abbreviation: "SB",
        country: "Solomon Islands",
        region: "Oceania"
      }, {
        abbreviation: "TK",
        country: "Tokelau",
        region: "Oceania"
      }, {
        abbreviation: "TO",
        country: "Tonga",
        region: "Oceania"
      }, {
        abbreviation: "TV",
        country: "Tuvalu",
        region: "Oceania"
      }, {
        abbreviation: "UM",
        country: "United States Minor Outlying Islands (the)",
        region: "Oceania"
      }, {
        abbreviation: "VU",
        country: "Vanuatu",
        region: "Oceania"
      }, {
        abbreviation: "WF",
        country: "Wallis and Futuna",
        region: "Oceania"
      }, {
        abbreviation: "AR",
        country: "Argentina",
        region: "South America"
      }, {
        abbreviation: "BO",
        country: "Bolivia (Plurinational State of)",
        region: "South America"
      }, {
        abbreviation: "BR",
        country: "Brazil",
        region: "South America"
      }, {
        abbreviation: "CL",
        country: "Chile",
        region: "South America"
      }, {
        abbreviation: "CO",
        country: "Colombia",
        region: "South America"
      }, {
        abbreviation: "EC",
        country: "Ecuador",
        region: "South America"
      }, {
        abbreviation: "FK",
        country: "Falkland Islands (the) [Malvinas]",
        region: "South America"
      }, {
        abbreviation: "GF",
        country: "French Guiana",
        region: "South America"
      }, {
        abbreviation: "GY",
        country: "Guyana",
        region: "South America"
      }, {
        abbreviation: "PY",
        country: "Paraguay",
        region: "South America"
      }, {
        abbreviation: "PE",
        country: "Peru",
        region: "South America"
      }, {
        abbreviation: "SR",
        country: "Suriname",
        region: "South America"
      }, {
        abbreviation: "UY",
        country: "Uruguay",
        region: "South America"
      }, {
        abbreviation: "VE",
        country: "Venezuela (Bolivarian Republic of)",
        region: "South America"
      }, {
        abbreviation: "AI",
        country: "Anguilla",
        region: "The Caribbean"
      }, {
        abbreviation: "AG",
        country: "Antigua and Barbuda",
        region: "The Caribbean"
      }, {
        abbreviation: "AW",
        country: "Aruba",
        region: "The Caribbean"
      }, {
        abbreviation: "BS",
        country: "Bahamas (the)",
        region: "The Caribbean"
      }, {
        abbreviation: "BB",
        country: "Barbados",
        region: "The Caribbean"
      }, {
        abbreviation: "BQ",
        country: "Bonaire, Sint Eustatius and Saba",
        region: "The Caribbean"
      }, {
        abbreviation: "KY",
        country: "Cayman Islands (the)",
        region: "The Caribbean"
      }, {
        abbreviation: "CU",
        country: "Cuba",
        region: "The Caribbean"
      }, {
        abbreviation: "CW",
        country: "Curaçao",
        region: "The Caribbean"
      }, {
        abbreviation: "DM",
        country: "Dominica",
        region: "The Caribbean"
      }, {
        abbreviation: "DO",
        country: "Dominican Republic (the)",
        region: "The Caribbean"
      }, {
        abbreviation: "GD",
        country: "Grenada",
        region: "The Caribbean"
      }, {
        abbreviation: "GP",
        country: "Guadeloupe",
        region: "The Caribbean"
      }, {
        abbreviation: "HT",
        country: "Haiti",
        region: "The Caribbean"
      }, {
        abbreviation: "JM",
        country: "Jamaica",
        region: "The Caribbean"
      }, {
        abbreviation: "MQ",
        country: "Martinique",
        region: "The Caribbean"
      }, {
        abbreviation: "MS",
        country: "Montserrat",
        region: "The Caribbean"
      }, {
        abbreviation: "PR",
        country: "Puerto Rico",
        region: "The Caribbean"
      }, {
        abbreviation: "BL",
        country: "Saint Barthélemy",
        region: "The Caribbean"
      }, {
        abbreviation: "KN",
        country: "Saint Kitts and Nevis",
        region: "The Caribbean"
      }, {
        abbreviation: "LC",
        country: "Saint Lucia",
        region: "The Caribbean"
      }, {
        abbreviation: "MF",
        country: "Saint Martin (French part)",
        region: "The Caribbean"
      }, {
        abbreviation: "VC",
        country: "Saint Vincent and the Grenadines",
        region: "The Caribbean"
      }, {
        abbreviation: "SX",
        country: "Sint Maarten (Dutch part)",
        region: "The Caribbean"
      }, {
        abbreviation: "TT",
        country: "Trinidad and Tobago",
        region: "The Caribbean"
      }, {
        abbreviation: "TC",
        country: "Turks and Caicos Islands (the)",
        region: "The Caribbean"
      }, {
        abbreviation: "VG",
        country: "Virgin Islands (British)",
        region: "The Caribbean"
      }, {
        abbreviation: "VI",
        country: "Virgin Islands (U.S.)",
        region: "The Caribbean"
      }
    ]
  );

  public getCountryes(): WritableSignal<CountryModel[]> {
    return this.countrys;
  }

  public findCountry(abbreviation: string): CountryModel | null {
    const countrys = this.countrys();
    const index = countrys.findIndex((country) => country.abbreviation === abbreviation);
    if (index !== -1) {
      return countrys[index];
    } else {
      return null;
    }
  }
}
