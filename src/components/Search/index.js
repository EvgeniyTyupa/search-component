import { useState } from "react";
import Checkbox from "../Checkbox";
import Toggle from "../Toggle";
import "./styles.css";

const countriesData = [
	{ checked: false, code: "AF", name: "Afghanistan" },
	{ checked: false, code: "AL", name: "Albania" },
	{ checked: false, code: "DZ", name: "Algeria" },
	{ checked: false, code: "AS", name: "American Samoa" },
	{ checked: false, code: "AD", name: "Andorra" },
	{ checked: false, code: "AO", name: "Angola" },
	{ checked: false, code: "AI", name: "Anguilla" },
	{ checked: false, code: "AQ", name: "Antarctica" },
	{ checked: false, code: "AG", name: "Antigua and Barbuda" },
	{ checked: false, code: "AR", name: "Argentina" },
	{ checked: false, code: "AM", name: "Armenia" },
	{ checked: false, code: "AW", name: "Aruba" },
	{ checked: false, code: "AU", name: "Australia" },
	{ checked: false, code: "AT", name: "Austria" },
	{ checked: false, code: "AZ", name: "Azerbaijan" },
	{ checked: false, code: "BS", name: "Bahamas (the)" },
	{ checked: false, code: "BH", name: "Bahrain" },
	{ checked: false, code: "BD", name: "Bangladesh" },
	{ checked: false, code: "BB", name: "Barbados" },
	{ checked: false, code: "BY", name: "Belarus" },
	{ checked: false, code: "BE", name: "Belgium" },
	{ checked: false, code: "BZ", name: "Belize" },
	{ checked: false, code: "BJ", name: "Benin" },
	{ checked: false, code: "BM", name: "Bermuda" },
	{ checked: false, code: "BT", name: "Bhutan" },
	{ checked: false, code: "BO", name: "Bolivia (Plurinational State of)" },
	{ checked: false, code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
	{ checked: false, code: "BA", name: "Bosnia and Herzegovina" },
	{ checked: false, code: "BW", name: "Botswana" },
	{ checked: false, code: "BV", name: "Bouvet Island" },
	{ checked: false, code: "BR", name: "Brazil" },
	{ checked: false, code: "IO", name: "British Indian Ocean Territory (the)" },
	{ checked: false, code: "BN", name: "Brunei Darussalam" },
	{ checked: false, code: "BG", name: "Bulgaria" },
	{ checked: false, code: "BF", name: "Burkina Faso" },
	{ checked: false, code: "BI", name: "Burundi" },
	{ checked: false, code: "CV", name: "Cabo Verde" },
	{ checked: false, code: "KH", name: "Cambodia" },
	{ checked: false, code: "CM", name: "Cameroon" },
	{ checked: false, code: "CA", name: "Canada" },
	{ checked: false, code: "KY", name: "Cayman Islands (the)" },
	{ checked: false, code: "CF", name: "Central African Republic (the)" },
	{ checked: false, code: "TD", name: "Chad" },
	{ checked: false, code: "CL", name: "Chile" },
	{ checked: false, code: "CN", name: "China" },
	{ checked: false, code: "CX", name: "Christmas Island" },
	{ checked: false, code: "CC", name: "Cocos (Keeling) Islands (the)" },
	{ checked: false, code: "CO", name: "Colombia" },
	{ checked: false, code: "KM", name: "Comoros (the)" },
	{
		checked: false,
		code: "CD",
		name: "Congo (the Democratic Republic of the)",
	},
	{ checked: false, code: "CG", name: "Congo (the)" },
	{ checked: false, code: "CK", name: "Cook Islands (the)" },
	{ checked: false, code: "CR", name: "Costa Rica" },
	{ checked: false, code: "HR", name: "Croatia" },
	{ checked: false, code: "CU", name: "Cuba" },
	{ checked: false, code: "CW", name: "Curaçao" },
	{ checked: false, code: "CY", name: "Cyprus" },
	{ checked: false, code: "CZ", name: "Czechia" },
	{ checked: false, code: "CI", name: "Côte d'Ivoire" },
	{ checked: false, code: "DK", name: "Denmark" },
	{ checked: false, code: "DJ", name: "Djibouti" },
	{ checked: false, code: "DM", name: "Dominica" },
	{ checked: false, code: "DO", name: "Dominican Republic (the)" },
	{ checked: false, code: "EC", name: "Ecuador" },
	{ checked: false, code: "EG", name: "Egypt" },
	{ checked: false, code: "SV", name: "El Salvador" },
	{ checked: false, code: "GQ", name: "Equatorial Guinea" },
	{ checked: false, code: "ER", name: "Eritrea" },
	{ checked: false, code: "EE", name: "Estonia" },
	{ checked: false, code: "SZ", name: "Eswatini" },
	{ checked: false, code: "ET", name: "Ethiopia" },
	{ checked: false, code: "FK", name: "Falkland Islands (the) [Malvinas]" },
	{ checked: false, code: "FO", name: "Faroe Islands (the)" },
	{ checked: false, code: "FJ", name: "Fiji" },
	{ checked: false, code: "FI", name: "Finland" },
	{ checked: false, code: "FR", name: "France" },
	{ checked: false, code: "GF", name: "French Guiana" },
	{ checked: false, code: "PF", name: "French Polynesia" },
	{ checked: false, code: "TF", name: "French Southern Territories (the)" },
	{ checked: false, code: "GA", name: "Gabon" },
	{ checked: false, code: "GM", name: "Gambia (the)" },
	{ checked: false, code: "GE", name: "Georgia" },
	{ checked: false, code: "DE", name: "Germany" },
	{ checked: false, code: "GH", name: "Ghana" },
	{ checked: false, code: "GI", name: "Gibraltar" },
	{ checked: false, code: "GR", name: "Greece" },
	{ checked: false, code: "GL", name: "Greenland" },
	{ checked: false, code: "GD", name: "Grenada" },
	{ checked: false, code: "GP", name: "Guadeloupe" },
	{ checked: false, code: "GU", name: "Guam" },
	{ checked: false, code: "GT", name: "Guatemala" },
	{ checked: false, code: "GG", name: "Guernsey" },
	{ checked: false, code: "GN", name: "Guinea" },
	{ checked: false, code: "GW", name: "Guinea-Bissau" },
	{ checked: false, code: "GY", name: "Guyana" },
	{ checked: false, code: "HT", name: "Haiti" },
	{ checked: false, code: "HM", name: "Heard Island and McDonald Islands" },
	{ checked: false, code: "VA", name: "Holy See (the)" },
	{ checked: false, code: "HN", name: "Honduras" },
	{ checked: false, code: "HK", name: "Hong Kong" },
	{ checked: false, code: "HU", name: "Hungary" },
	{ checked: false, code: "IS", name: "Iceland" },
	{ checked: false, code: "IN", name: "India" },
	{ checked: false, code: "ID", name: "Indonesia" },
	{ checked: false, code: "IR", name: "Iran (Islamic Republic of)" },
	{ checked: false, code: "IQ", name: "Iraq" },
	{ checked: false, code: "IE", name: "Ireland" },
	{ checked: false, code: "IM", name: "Isle of Man" },
	{ checked: false, code: "IL", name: "Israel" },
	{ checked: false, code: "IT", name: "Italy" },
	{ checked: false, code: "JM", name: "Jamaica" },
	{ checked: false, code: "JP", name: "Japan" },
	{ checked: false, code: "JE", name: "Jersey" },
	{ checked: false, code: "JO", name: "Jordan" },
	{ checked: false, code: "KZ", name: "Kazakhstan" },
	{ checked: false, code: "KE", name: "Kenya" },
	{ checked: false, code: "KI", name: "Kiribati" },
	{
		checked: false,
		code: "KP",
		name: "Korea (the Democratic People's Republic of)",
	},
	{ checked: false, code: "KR", name: "Korea (the Republic of)" },
	{ checked: false, code: "KW", name: "Kuwait" },
	{ checked: false, code: "KG", name: "Kyrgyzstan" },
	{
		checked: false,
		code: "LA",
		name: "Lao People's Democratic Republic (the)",
	},
	{ checked: false, code: "LV", name: "Latvia" },
	{ checked: false, code: "LB", name: "Lebanon" },
	{ checked: false, code: "LS", name: "Lesotho" },
	{ checked: false, code: "LR", name: "Liberia" },
	{ checked: false, code: "LY", name: "Libya" },
	{ checked: false, code: "LI", name: "Liechtenstein" },
	{ checked: false, code: "LT", name: "Lithuania" },
	{ checked: false, code: "LU", name: "Luxembourg" },
	{ checked: false, code: "MO", name: "Macao" },
	{ checked: false, code: "MG", name: "Madagascar" },
	{ checked: false, code: "MW", name: "Malawi" },
	{ checked: false, code: "MY", name: "Malaysia" },
	{ checked: false, code: "MV", name: "Maldives" },
	{ checked: false, code: "ML", name: "Mali" },
	{ checked: false, code: "MT", name: "Malta" },
	{ checked: false, code: "MH", name: "Marshall Islands (the)" },
	{ checked: false, code: "MQ", name: "Martinique" },
	{ checked: false, code: "MR", name: "Mauritania" },
	{ checked: false, code: "MU", name: "Mauritius" },
	{ checked: false, code: "YT", name: "Mayotte" },
	{ checked: false, code: "MX", name: "Mexico" },
	{ checked: false, code: "FM", name: "Micronesia (Federated States of)" },
	{ checked: false, code: "MD", name: "Moldova (the Republic of)" },
	{ checked: false, code: "MC", name: "Monaco" },
	{ checked: false, code: "MN", name: "Mongolia" },
	{ checked: false, code: "ME", name: "Montenegro" },
	{ checked: false, code: "MS", name: "Montserrat" },
	{ checked: false, code: "MA", name: "Morocco" },
	{ checked: false, code: "MZ", name: "Mozambique" },
	{ checked: false, code: "MM", name: "Myanmar" },
	{ checked: false, code: "NA", name: "Namibia" },
	{ checked: false, code: "NR", name: "Nauru" },
	{ checked: false, code: "NP", name: "Nepal" },
	{ checked: false, code: "NL", name: "Netherlands (the)" },
	{ checked: false, code: "NC", name: "New Caledonia" },
	{ checked: false, code: "NZ", name: "New Zealand" },
	{ checked: false, code: "NI", name: "Nicaragua" },
	{ checked: false, code: "NE", name: "Niger (the)" },
	{ checked: false, code: "NG", name: "Nigeria" },
	{ checked: false, code: "NU", name: "Niue" },
	{ checked: false, code: "NF", name: "Norfolk Island" },
	{ checked: false, code: "MP", name: "Northern Mariana Islands (the)" },
	{ checked: false, code: "NO", name: "Norway" },
	{ checked: false, code: "OM", name: "Oman" },
	{ checked: false, code: "PK", name: "Pakistan" },
	{ checked: false, code: "PW", name: "Palau" },
	{ checked: false, code: "PS", name: "Palestine, State of" },
	{ checked: false, code: "PA", name: "Panama" },
	{ checked: false, code: "PG", name: "Papua New Guinea" },
	{ checked: false, code: "PY", name: "Paraguay" },
	{ checked: false, code: "PE", name: "Peru" },
	{ checked: false, code: "PH", name: "Philippines (the)" },
	{ checked: false, code: "PN", name: "Pitcairn" },
	{ checked: false, code: "PL", name: "Poland" },
	{ checked: false, code: "PT", name: "Portugal" },
	{ checked: false, code: "PR", name: "Puerto Rico" },
	{ checked: false, code: "QA", name: "Qatar" },
	{ checked: false, code: "MK", name: "Republic of North Macedonia" },
	{ checked: false, code: "RO", name: "Romania" },
	{ checked: false, code: "RU", name: "Russian Federation (the)" },
	{ checked: false, code: "RW", name: "Rwanda" },
	{ checked: false, code: "RE", name: "Réunion" },
	{ checked: false, code: "BL", name: "Saint Barthélemy" },
	{
		checked: false,
		code: "SH",
		name: "Saint Helena, Ascension and Tristan da Cunha",
	},
	{ checked: false, code: "KN", name: "Saint Kitts and Nevis" },
	{ checked: false, code: "LC", name: "Saint Lucia" },
	{ checked: false, code: "MF", name: "Saint Martin (French part)" },
	{ checked: false, code: "PM", name: "Saint Pierre and Miquelon" },
	{ checked: false, code: "VC", name: "Saint Vincent and the Grenadines" },
	{ checked: false, code: "WS", name: "Samoa" },
	{ checked: false, code: "SM", name: "San Marino" },
	{ checked: false, code: "ST", name: "Sao Tome and Principe" },
	{ checked: false, code: "SA", name: "Saudi Arabia" },
	{ checked: false, code: "SN", name: "Senegal" },
	{ checked: false, code: "RS", name: "Serbia" },
	{ checked: false, code: "SC", name: "Seychelles" },
	{ checked: false, code: "SL", name: "Sierra Leone" },
	{ checked: false, code: "SG", name: "Singapore" },
	{ checked: false, code: "SX", name: "Sint Maarten (Dutch part)" },
	{ checked: false, code: "SK", name: "Slovakia" },
	{ checked: false, code: "SI", name: "Slovenia" },
	{ checked: false, code: "SB", name: "Solomon Islands" },
	{ checked: false, code: "SO", name: "Somalia" },
	{ checked: false, code: "ZA", name: "South Africa" },
	{
		checked: false,
		code: "GS",
		name: "South Georgia and the South Sandwich Islands",
	},
	{ checked: false, code: "SS", name: "South Sudan" },
	{ checked: false, code: "ES", name: "Spain" },
	{ checked: false, code: "LK", name: "Sri Lanka" },
	{ checked: false, code: "SD", name: "Sudan (the)" },
	{ checked: false, code: "SR", name: "Suriname" },
	{ checked: false, code: "SJ", name: "Svalbard and Jan Mayen" },
	{ checked: false, code: "SE", name: "Sweden" },
	{ checked: false, code: "CH", name: "Switzerland" },
	{ checked: false, code: "SY", name: "Syrian Arab Republic" },
	{ checked: false, code: "TW", name: "Taiwan" },
	{ checked: false, code: "TJ", name: "Tajikistan" },
	{ checked: false, code: "TZ", name: "Tanzania, United Republic of" },
	{ checked: false, code: "TH", name: "Thailand" },
	{ checked: false, code: "TL", name: "Timor-Leste" },
	{ checked: false, code: "TG", name: "Togo" },
	{ checked: false, code: "TK", name: "Tokelau" },
	{ checked: false, code: "TO", name: "Tonga" },
	{ checked: false, code: "TT", name: "Trinidad and Tobago" },
	{ checked: false, code: "TN", name: "Tunisia" },
	{ checked: false, code: "TR", name: "Turkey" },
	{ checked: false, code: "TM", name: "Turkmenistan" },
	{ checked: false, code: "TC", name: "Turks and Caicos Islands (the)" },
	{ checked: false, code: "TV", name: "Tuvalu" },
	{ checked: false, code: "UG", name: "Uganda" },
	{ checked: false, code: "UA", name: "Ukraine" },
	{ checked: false, code: "AE", name: "United Arab Emirates (the)" },
	{
		checked: false,
		code: "GB",
		name: "United Kingdom of Great Britain and Northern Ireland (the)",
	},
	{
		checked: false,
		code: "UM",
		name: "United States Minor Outlying Islands (the)",
	},
	{ checked: false, code: "US", name: "United States of America (the)" },
	{ checked: false, code: "UY", name: "Uruguay" },
	{ checked: false, code: "UZ", name: "Uzbekistan" },
	{ checked: false, code: "VU", name: "Vanuatu" },
	{ checked: false, code: "VE", name: "Venezuela (Bolivarian Republic of)" },
	{ checked: false, code: "VN", name: "Viet Nam" },
	{ checked: false, code: "VG", name: "Virgin Islands (British)" },
	{ checked: false, code: "VI", name: "Virgin Islands (U.S.)" },
	{ checked: false, code: "WF", name: "Wallis and Futuna" },
	{ checked: false, code: "EH", name: "Western Sahara" },
	{ checked: false, code: "YE", name: "Yemen" },
	{ checked: false, code: "ZM", name: "Zambia" },
	{ checked: false, code: "ZW", name: "Zimbabwe" },
	{ checked: false, code: "AX", name: "Åland Islands" },
];

function Search() {
	const [countries, setCountries] = useState(countriesData);
	const [search, setSearch] = useState("");
	const [isSelectedOnly, setIsSelectedOnly] = useState(false);
	const filteredResults = (search, isSelectedOnly) => {
		const handleChange = (e, code) => {
			const countryIdx = countries.findIndex(
				(country) => country.code === code
			);

			setCountries((prevState) => {
				const temp = [...prevState];
				temp[countryIdx] = {
					...prevState[countryIdx],
					checked: e.target.checked,
				};
				return temp;
			});
		};

		const searchedCountries =
			search === ""
				? countries
				: countries.filter(
						(country) =>
							country.name.toLowerCase().includes(search.toLowerCase()) ||
							country.checked
				  );

		const filteredCountries = isSelectedOnly
			? searchedCountries.filter((country) => country.checked)
			: searchedCountries;

		return filteredCountries.map((country) => (
			<Checkbox
				key={country.code}
				code={country.code}
				name={country.name}
				handleChange={(e) => {
					handleChange(e, country.code);
				}}
			/>
		));
	};

	const handleClearAll = () => {
		setIsSelectedOnly(false);
		setSearch("");
		setCountries((prevState) => {
			const temp = [...prevState];
			temp.forEach((country) => (country.checked = false));
			return temp;
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			countries
				.filter((country) => country.checked)
				.map((country) => country.name)
		);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="searchContainer">
				<input
					className="searchInput"
					placeholder="Search"
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
				<div className="controlContainer">
					<Toggle isActive={isSelectedOnly} setActive={setIsSelectedOnly} />
					<button
						className="clearAllButton"
						type="reset"
						onClick={handleClearAll}
					>
						Clear All
					</button>
				</div>
				<div className="resultsContainer">
					{filteredResults(search, isSelectedOnly)}
				</div>
				<div className="footer">
					<button className="saveButton" type="submit">
						Save
					</button>
				</div>
			</div>
		</form>
	);
}

export default Search;
