(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5811],
  {
    3743: function (e, a, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/node-rental-form",
        function () {
          return n(88359);
        },
      ]);
    },
    29017: function (e, a, n) {
      "use strict";
      n.d(a, {
        l: function () {
          return r;
        },
      });
      var o = n(81354),
        t = n.n(o);
      let r = (e) => t().AES.encrypt(e, "ATLTEST123").toString();
    },
    88359: function (e, a, n) {
      "use strict";
      n.r(a);
      var o = n(85893),
        t = n(84769),
        r = n(93962),
        l = n(67294);
      n(36501), n(25675), n(38049);
      var i = n(55678);
      n(79422);
      var s = n(41664),
        c = n.n(s),
        d = n(4298),
        m = n.n(d),
        u = n(29017);
      a.default = () => {
        let [e, a] = (0, l.useState)(!1),
          [n, s] = (0, l.useState)(!1),
          [d, h] = (0, l.useState)(!1),
          [p, x] = (0, l.useState)(!1),
          [f, g] = (0, l.useState)({
            fullName: "",
            email: "",
            phone: "",
            country: "",
            organization: "",
            jobTitle: "",
            purposeOfRental: "",
            purposeOfRental_other: "",
            lengthOfRental: "",
            powerRequired: "",
            foundUs: "",
            foundUs_other: "",
            aditionalInfo: "",
            html: "",
            subject: "",
          }),
          [b, N] = (0, l.useState)({
            fullName: "",
            email: "",
            phone: "",
            country: "",
            organization: "",
            jobTitle: "",
            purposeOfRental: "",
            purposeOfRental_other: "",
            lengthOfRental: "",
            powerRequired: "",
            foundUs: "",
            foundUs_other: "",
            aditionalInfo: "",
          }),
          j = [
            { name: "email", message: "Please enter email" },
            { name: "fullName", message: "Please enter name" },
            { name: "phone", message: "Please enter phone" },
            { name: "country", message: "Please enter country" },
            { name: "organization", message: "Please enter organization" },
            { name: "jobTitle", message: "Please enter job title" },
            {
              name: "purposeOfRental",
              message: "Please enter purpose of rental",
            },
            {
              name: "lengthOfRental",
              message: "Please enter length of rental",
            },
            { name: "powerRequired", message: "Please enter power required" },
            {
              name: "foundUs",
              message: "Please enter how did you hear about us?",
            },
            { name: "aditionalInfo", message: "Please enter additional info" },
          ],
          y = (e, a) => {
            switch (e) {
              case "email":
                if (!a) return "Please enter email";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a))
                  return "Invalid email address";
                return "";
              case "fullName":
                if (!a) return "Please enter name";
                return "";
              case "phone":
                if (!a) return "Please enter phone";
                return "";
              case "country":
                if (!a) return "Please enter country";
                return "";
              case "organization":
                if (!a) return "Please enter organization";
                return "";
              case "jobTitle":
                if (!a) return "Please enter job title";
                return "";
              case "purposeOfRental":
                if (!a) return "Please enter purpose of rental";
                return "";
              case "purposeOfRental_other":
                if (!a) return "Please enter other purpose of rental";
                return "";
              case "lengthOfRental":
                if (!a) return "Please enter length of rental";
                return "";
              case "powerRequired":
                if (!a) return "Please enter power required";
                return "";
              case "foundUs":
                if (!a) return "Please enter how did you hear about us?";
                return "";
              case "foundUs_other":
                if (!a) return "Please enter other how did you hear about us?";
                return "";
              case "aditionalInfo":
                if (!a) return "Please enter additional info";
                return "";
              default:
                return "";
            }
          },
          R = (e) => {
            e.preventDefault();
            let { name: a, value: n } = e.target;
            g({ ...f, [a]: n });
            let o = y(a, n);
            N({ ...b, [a]: o });
          },
          v = [
            { name: "Afghanistan", code: "AF" },
            { name: "\xc5land Islands", code: "AX" },
            { name: "Albania", code: "AL" },
            { name: "Algeria", code: "DZ" },
            { name: "American Samoa", code: "AS" },
            { name: "AndorrA", code: "AD" },
            { name: "Angola", code: "AO" },
            { name: "Anguilla", code: "AI" },
            { name: "Antarctica", code: "AQ" },
            { name: "Antigua and Barbuda", code: "AG" },
            { name: "Argentina", code: "AR" },
            { name: "Armenia", code: "AM" },
            { name: "Aruba", code: "AW" },
            { name: "Australia", code: "AU" },
            { name: "Austria", code: "AT" },
            { name: "Azerbaijan", code: "AZ" },
            { name: "Bahamas", code: "BS" },
            { name: "Bahrain", code: "BH" },
            { name: "Bangladesh", code: "BD" },
            { name: "Barbados", code: "BB" },
            { name: "Belarus", code: "BY" },
            { name: "Belgium", code: "BE" },
            { name: "Belize", code: "BZ" },
            { name: "Benin", code: "BJ" },
            { name: "Bermuda", code: "BM" },
            { name: "Bhutan", code: "BT" },
            { name: "Bolivia", code: "BO" },
            { name: "Bosnia and Herzegovina", code: "BA" },
            { name: "Botswana", code: "BW" },
            { name: "Bouvet Island", code: "BV" },
            { name: "Brazil", code: "BR" },
            { name: "British Indian Ocean Territory", code: "IO" },
            { name: "Brunei Darussalam", code: "BN" },
            { name: "Bulgaria", code: "BG" },
            { name: "Burkina Faso", code: "BF" },
            { name: "Burundi", code: "BI" },
            { name: "Cambodia", code: "KH" },
            { name: "Cameroon", code: "CM" },
            { name: "Canada", code: "CA" },
            { name: "Cape Verde", code: "CV" },
            { name: "Cayman Islands", code: "KY" },
            { name: "Central African Republic", code: "CF" },
            { name: "Chad", code: "TD" },
            { name: "Chile", code: "CL" },
            { name: "China", code: "CN" },
            { name: "Christmas Island", code: "CX" },
            { name: "Cocos (Keeling) Islands", code: "CC" },
            { name: "Colombia", code: "CO" },
            { name: "Comoros", code: "KM" },
            { name: "Congo", code: "CG" },
            { name: "Congo, The Democratic Republic of the", code: "CD" },
            { name: "Cook Islands", code: "CK" },
            { name: "Costa Rica", code: "CR" },
            { name: "Cote D'Ivoire", code: "CI" },
            { name: "Croatia", code: "HR" },
            { name: "Cuba", code: "CU" },
            { name: "Cyprus", code: "CY" },
            { name: "Czech Republic", code: "CZ" },
            { name: "Denmark", code: "DK" },
            { name: "Djibouti", code: "DJ" },
            { name: "Dominica", code: "DM" },
            { name: "Dominican Republic", code: "DO" },
            { name: "Ecuador", code: "EC" },
            { name: "Egypt", code: "EG" },
            { name: "El Salvador", code: "SV" },
            { name: "Equatorial Guinea", code: "GQ" },
            { name: "Eritrea", code: "ER" },
            { name: "Estonia", code: "EE" },
            { name: "Ethiopia", code: "ET" },
            { name: "Falkland Islands (Malvinas)", code: "FK" },
            { name: "Faroe Islands", code: "FO" },
            { name: "Fiji", code: "FJ" },
            { name: "Finland", code: "FI" },
            { name: "France", code: "FR" },
            { name: "French Guiana", code: "GF" },
            { name: "French Polynesia", code: "PF" },
            { name: "French Southern Territories", code: "TF" },
            { name: "Gabon", code: "GA" },
            { name: "Gambia", code: "GM" },
            { name: "Georgia", code: "GE" },
            { name: "Germany", code: "DE" },
            { name: "Ghana", code: "GH" },
            { name: "Gibraltar", code: "GI" },
            { name: "Greece", code: "GR" },
            { name: "Greenland", code: "GL" },
            { name: "Grenada", code: "GD" },
            { name: "Guadeloupe", code: "GP" },
            { name: "Guam", code: "GU" },
            { name: "Guatemala", code: "GT" },
            { name: "Guernsey", code: "GG" },
            { name: "Guinea", code: "GN" },
            { name: "Guinea-Bissau", code: "GW" },
            { name: "Guyana", code: "GY" },
            { name: "Haiti", code: "HT" },
            { name: "Heard Island and Mcdonald Islands", code: "HM" },
            { name: "Holy See (Vatican City State)", code: "VA" },
            { name: "Honduras", code: "HN" },
            { name: "Hong Kong", code: "HK" },
            { name: "Hungary", code: "HU" },
            { name: "Iceland", code: "IS" },
            { name: "India", code: "IN" },
            { name: "Indonesia", code: "ID" },
            { name: "Iran, Islamic Republic Of", code: "IR" },
            { name: "Iraq", code: "IQ" },
            { name: "Ireland", code: "IE" },
            { name: "Isle of Man", code: "IM" },
            { name: "Israel", code: "IL" },
            { name: "Italy", code: "IT" },
            { name: "Jamaica", code: "JM" },
            { name: "Japan", code: "JP" },
            { name: "Jersey", code: "JE" },
            { name: "Jordan", code: "JO" },
            { name: "Kazakhstan", code: "KZ" },
            { name: "Kenya", code: "KE" },
            { name: "Kiribati", code: "KI" },
            { name: "Korea, Democratic People'S Republic of", code: "KP" },
            { name: "Korea, Republic of", code: "KR" },
            { name: "Kuwait", code: "KW" },
            { name: "Kyrgyzstan", code: "KG" },
            { name: "Lao People'S Democratic Republic", code: "LA" },
            { name: "Latvia", code: "LV" },
            { name: "Lebanon", code: "LB" },
            { name: "Lesotho", code: "LS" },
            { name: "Liberia", code: "LR" },
            { name: "Libyan Arab Jamahiriya", code: "LY" },
            { name: "Liechtenstein", code: "LI" },
            { name: "Lithuania", code: "LT" },
            { name: "Luxembourg", code: "LU" },
            { name: "Macao", code: "MO" },
            { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
            { name: "Madagascar", code: "MG" },
            { name: "Malawi", code: "MW" },
            { name: "Malaysia", code: "MY" },
            { name: "Maldives", code: "MV" },
            { name: "Mali", code: "ML" },
            { name: "Malta", code: "MT" },
            { name: "Marshall Islands", code: "MH" },
            { name: "Martinique", code: "MQ" },
            { name: "Mauritania", code: "MR" },
            { name: "Mauritius", code: "MU" },
            { name: "Mayotte", code: "YT" },
            { name: "Mexico", code: "MX" },
            { name: "Micronesia, Federated States of", code: "FM" },
            { name: "Moldova, Republic of", code: "MD" },
            { name: "Monaco", code: "MC" },
            { name: "Mongolia", code: "MN" },
            { name: "Montserrat", code: "MS" },
            { name: "Morocco", code: "MA" },
            { name: "Mozambique", code: "MZ" },
            { name: "Myanmar", code: "MM" },
            { name: "Namibia", code: "NA" },
            { name: "Nauru", code: "NR" },
            { name: "Nepal", code: "NP" },
            { name: "Netherlands", code: "NL" },
            { name: "Netherlands Antilles", code: "AN" },
            { name: "New Caledonia", code: "NC" },
            { name: "New Zealand", code: "NZ" },
            { name: "Nicaragua", code: "NI" },
            { name: "Niger", code: "NE" },
            { name: "Nigeria", code: "NG" },
            { name: "Niue", code: "NU" },
            { name: "Norfolk Island", code: "NF" },
            { name: "Northern Mariana Islands", code: "MP" },
            { name: "Norway", code: "NO" },
            { name: "Oman", code: "OM" },
            { name: "Pakistan", code: "PK" },
            { name: "Palau", code: "PW" },
            { name: "Palestinian Territory, Occupied", code: "PS" },
            { name: "Panama", code: "PA" },
            { name: "Papua New Guinea", code: "PG" },
            { name: "Paraguay", code: "PY" },
            { name: "Peru", code: "PE" },
            { name: "Philippines", code: "PH" },
            { name: "Pitcairn", code: "PN" },
            { name: "Poland", code: "PL" },
            { name: "Portugal", code: "PT" },
            { name: "Puerto Rico", code: "PR" },
            { name: "Qatar", code: "QA" },
            { name: "Reunion", code: "RE" },
            { name: "Romania", code: "RO" },
            { name: "Russian Federation", code: "RU" },
            { name: "RWANDA", code: "RW" },
            { name: "Saint Helena", code: "SH" },
            { name: "Saint Kitts and Nevis", code: "KN" },
            { name: "Saint Lucia", code: "LC" },
            { name: "Saint Pierre and Miquelon", code: "PM" },
            { name: "Saint Vincent and the Grenadines", code: "VC" },
            { name: "Samoa", code: "WS" },
            { name: "San Marino", code: "SM" },
            { name: "Sao Tome and Principe", code: "ST" },
            { name: "Saudi Arabia", code: "SA" },
            { name: "Senegal", code: "SN" },
            { name: "Serbia and Montenegro", code: "CS" },
            { name: "Seychelles", code: "SC" },
            { name: "Sierra Leone", code: "SL" },
            { name: "Singapore", code: "SG" },
            { name: "Slovakia", code: "SK" },
            { name: "Slovenia", code: "SI" },
            { name: "Solomon Islands", code: "SB" },
            { name: "Somalia", code: "SO" },
            { name: "South Africa", code: "ZA" },
            {
              name: "South Georgia and the South Sandwich Islands",
              code: "GS",
            },
            { name: "Spain", code: "ES" },
            { name: "Sri Lanka", code: "LK" },
            { name: "Sudan", code: "SD" },
            { name: "Suriname", code: "SR" },
            { name: "Svalbard and Jan Mayen", code: "SJ" },
            { name: "Swaziland", code: "SZ" },
            { name: "Sweden", code: "SE" },
            { name: "Switzerland", code: "CH" },
            { name: "Syrian Arab Republic", code: "SY" },
            { name: "Taiwan, Province of China", code: "TW" },
            { name: "Tajikistan", code: "TJ" },
            { name: "Tanzania, United Republic of", code: "TZ" },
            { name: "Thailand", code: "TH" },
            { name: "Timor-Leste", code: "TL" },
            { name: "Togo", code: "TG" },
            { name: "Tokelau", code: "TK" },
            { name: "Tonga", code: "TO" },
            { name: "Trinidad and Tobago", code: "TT" },
            { name: "Tunisia", code: "TN" },
            { name: "Turkey", code: "TR" },
            { name: "Turkmenistan", code: "TM" },
            { name: "Turks and Caicos Islands", code: "TC" },
            { name: "Tuvalu", code: "TV" },
            { name: "Uganda", code: "UG" },
            { name: "Ukraine", code: "UA" },
            { name: "United Arab Emirates", code: "AE" },
            { name: "United Kingdom", code: "GB" },
            { name: "United States", code: "US" },
            { name: "United States Minor Outlying Islands", code: "UM" },
            { name: "Uruguay", code: "UY" },
            { name: "Uzbekistan", code: "UZ" },
            { name: "Vanuatu", code: "VU" },
            { name: "Venezuela", code: "VE" },
            { name: "Viet Nam", code: "VN" },
            { name: "Virgin Islands, British", code: "VG" },
            { name: "Virgin Islands, U.S.", code: "VI" },
            { name: "Wallis and Futuna", code: "WF" },
            { name: "Western Sahara", code: "EH" },
            { name: "Yemen", code: "YE" },
            { name: "Zambia", code: "ZM" },
            { name: "Zimbabwe", code: "ZW" },
          ];
        (0, l.useEffect)(() => {
          a("true" === localStorage.getItem("darkMode"));
          let e = (e) => {
            a(e.detail);
          };
          return (
            window.addEventListener("darkModeChange", e),
            () => {
              window.removeEventListener("darkModeChange", e);
            }
          );
        }, []);
        let w = async (e) => {
          e.preventDefault(),
            await window.grecaptcha.ready(() => {
              window.grecaptcha
                .execute("6Le0thYqAAAAAJ4ScsAZ24oCtA72jqVDaoWwKcdm", {
                  action: "submit",
                })
                .then(async (e) => {
                  if (!e) {
                    i.Am.error(
                      "The Google reCaptcha Token is missing, Something went wrong"
                    ),
                      s(!1);
                    return;
                  }
                })
                .catch((e) => {
                  s(!1), console.log(e.message);
                });
            });
          let a = y("fullName", f.fullName),
            n = y("email", f.email),
            t = y("phone", f.phone),
            r = y("country", f.country),
            l = y("organization", f.organization),
            c = y("jobTitle", f.jobTitle),
            m = y("purposeOfRental", f.purposeOfRental),
            b = y("purposeOfRental_other", f.purposeOfRental_other),
            R = y("lengthOfRental", f.lengthOfRental),
            v = y("powerRequired", f.powerRequired),
            w = y("foundUs", f.foundUs),
            S = y("foundUs_other", f.foundUs_other),
            A = y("aditionalInfo", f.aditionalInfo);
          if (
            ((f.html =
              "Full name :" +
              f.fullName +
              "<br/>Email :" +
              f.email +
              "<br/>Phone :" +
              f.phone +
              "<br/>Country :" +
              f.country +
              "<br/>Organization :" +
              f.organization +
              "<br/>Job Title :" +
              f.jobTitle +
              "<br/>Purpose of Rental :" +
              f.purposeOfRental +
              "<br/>Purpose of Rental (other) :" +
              f.purposeOfRental_other +
              "<br/>Length of Rental :" +
              f.lengthOfRental +
              "<br/>Power Required :" +
              f.powerRequired +
              "<br/>How Did You Hear About Us? :" +
              f.foundUs +
              "<br/>How Did You Hear About Us? (other) :" +
              f.foundUs_other +
              "<br/>Additional Information :" +
              f.aditionalInfo +
              "<br/>"),
            (f.subject = "Hex AI : Register Your Interest Form"),
            g(f),
            a || n || t || r || l || c || m || R || v || w || A)
          ) {
            N({
              fullName: a,
              email: n,
              phone: t,
              country: r,
              organization: l,
              jobTitle: c,
              purposeOfRental: m,
              lengthOfRental: R,
              powerRequired: v,
              foundUs: w,
              aditionalInfo: A,
            });
            return;
          }
          if ((!0 == d && b) || (!0 == p && S)) {
            N({ purposeOfRental_other: b, foundUs_other: S });
            return;
          }
          "Other" == f.foundUs_other &&
            j.push({
              name: "foundUs_other",
              message: "Please enter other how did you hear about us?",
            }),
            "other" == f.purposeOfRental_other &&
              j.push({
                name: "purposeOfRental_other",
                message: "Please enter other purpose of rental",
              }),
            s(!0);
          try {
            let e = (0, u.l)(JSON.stringify(f)),
              a = (0, u.l)(JSON.stringify(j)),
              n = "https://hashai.co.uk/api";
            window.location.hostname.includes("www") &&
              !n.includes("www") &&
              (n = "https://hashai.co.uk/api".replace(
                /^https:\/\//,
                "https://www."
              ));
            let t = await fetch("".concat(n, "/sendemail"), {
                method: "POST",
                body: JSON.stringify({ data: e, value: a }),
                headers: { "Content-Type": "application/json" },
              }),
              r = await t.json();
            r && (null == r ? void 0 : r.message)
              ? (i.Am.success(null == r ? void 0 : r.message),
                g({
                  fullName: "",
                  email: "",
                  phone: "",
                  country: "",
                  organization: "",
                  jobTitle: "",
                  purposeOfRental: "",
                  purposeOfRental_other: "",
                  lengthOfRental: "",
                  powerRequired: "",
                  foundUs: "",
                  foundUs_other: "",
                  aditionalInfo: "",
                  html: "",
                  subject: "",
                }))
              : i.Am.error(
                  (0, o.jsx)("div", {
                    dangerouslySetInnerHTML: { __html: r.error },
                  })
                );
          } catch (e) {
            console.error("Error submitting form:", e), h(!1), x(!1);
          } finally {
            s(!1), h(!1), x(!1);
          }
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(r.Z, {
              title:
                "Secure & Scalable Node Rentals: Register Interest at Hex AI",
              metaTitle:
                "Effortless Crypto Mining: Hex AI's Secure Node Rental Solutions - Register Your Interest!",
              metaDescription:
                "Take control of your crypto journey with Hex AI's secure node rentals. Effortless setup, high performance, and a range of use cases. Register your interest today and unlock new mining possibilities!",
            }),
            (0, o.jsxs)(t.Z, {
              children: [
                (0, o.jsx)(m(), {
                  src: "https://www.google.com/recaptcha/api.js?render=".concat(
                    "6Le0thYqAAAAAJ4ScsAZ24oCtA72jqVDaoWwKcdm"
                  ),
                }),
                (0, o.jsxs)("section", {
                  className: "bg-"
                    .concat(e ? "white" : "black", " text-")
                    .concat(e ? "black" : "white", " py-5"),
                  children: [
                    (0, o.jsx)("div", {
                      className: "bg-"
                        .concat(e ? "white" : "black", " text-")
                        .concat(
                          e ? "black" : "white",
                          " container-fluid px-3 px-lg-5 pb-4"
                        ),
                      children: (0, o.jsxs)("div", {
                        className: "row m-0 pb-0 border-color z-0 p-4",
                        children: [
                          (0, o.jsx)("h2", {
                            className: "orbitron-txt text-center pb-5 pt-2",
                            children: "Register Your Interest",
                          }),
                          (0, o.jsx)("div", {
                            className:
                              "col-lg-8 col-12 px-lg-4 d-flex flex-column justify-content-end",
                            children: (0, o.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, o.jsxs)("div", {
                                  className: "col-lg-6",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Full name",
                                    }),
                                    (0, o.jsx)("input", {
                                      type: "text",
                                      name: "fullName",
                                      value: f.fullName,
                                      onChange: (e) => R(e),
                                      required: !0,
                                      className: "".concat(
                                        !0 == e
                                          ? "node-rental-form-input-light"
                                          : "node-rental-form-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      placeholder: "Enter your full name..",
                                    }),
                                    b.fullName &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: b.fullName,
                                      }),
                                  ],
                                }),
                                (0, o.jsxs)("div", {
                                  className: "col-lg-6",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Email",
                                    }),
                                    (0, o.jsx)("input", {
                                      type: "email",
                                      name: "email",
                                      required: !0,
                                      value: f.email,
                                      onChange: (e) => R(e),
                                      className: "".concat(
                                        !0 == e
                                          ? "node-rental-form-input-light"
                                          : "node-rental-form-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      placeholder: "Enter your email",
                                    }),
                                    b.email &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: b.email,
                                      }),
                                  ],
                                }),
                                (0, o.jsxs)("div", {
                                  className: "col-lg-6",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Phone",
                                    }),
                                    (0, o.jsx)("input", {
                                      type: "number",
                                      name: "phone",
                                      required: !0,
                                      value: f.phone,
                                      onChange: (e) => R(e),
                                      className: "".concat(
                                        !0 == e
                                          ? "node-rental-form-input-light"
                                          : "node-rental-form-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      placeholder: "Enter your phone number..",
                                    }),
                                    b.phone &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: b.phone,
                                      }),
                                  ],
                                }),
                                (0, o.jsxs)("div", {
                                  className: "col-lg-6",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Country",
                                    }),
                                    (0, o.jsxs)("select", {
                                      id: "country",
                                      name: "country",
                                      onChange: (e) => {
                                        let { name: a, value: n } = e.target,
                                          o = y(a, n);
                                        N({ ...b, [a]: o }),
                                          (f.country = e.target.value);
                                      },
                                      className: "".concat(
                                        !0 == e
                                          ? "node-rental-form-input-light"
                                          : "node-rental-form-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      value: f.country,
                                      children: [
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "",
                                          children: "Select your country",
                                        }),
                                        null == v
                                          ? void 0
                                          : v.map((e, a) =>
                                              (0, o.jsx)(o.Fragment, {
                                                children: (0, o.jsx)("option", {
                                                  value: e.name,
                                                  className: "text-black",
                                                  children: e.name,
                                                }),
                                              })
                                            ),
                                      ],
                                    }),
                                    b.country &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: b.country,
                                      }),
                                  ],
                                }),
                                (0, o.jsxs)("div", {
                                  className: "col-lg-6",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Organization",
                                    }),
                                    (0, o.jsx)("input", {
                                      type: "text",
                                      name: "organization",
                                      value: f.organization,
                                      onChange: (e) => R(e),
                                      required: !0,
                                      className: "".concat(
                                        !0 == e
                                          ? "node-rental-form-input-light"
                                          : "node-rental-form-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      placeholder: "Enter your organization..",
                                    }),
                                    b.organization &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: b.organization,
                                      }),
                                  ],
                                }),
                                (0, o.jsxs)("div", {
                                  className: "col-lg-6",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Job Title",
                                    }),
                                    (0, o.jsx)("input", {
                                      type: "text",
                                      name: "jobTitle",
                                      value: f.jobTitle,
                                      onChange: (e) => R(e),
                                      required: !0,
                                      className: "".concat(
                                        !0 == e
                                          ? "node-rental-form-input-light"
                                          : "node-rental-form-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      placeholder: "Enter your job title..",
                                    }),
                                    b.jobTitle &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: b.jobTitle,
                                      }),
                                  ],
                                }),
                                (0, o.jsx)("div", {
                                  className: "col-12",
                                  children: (0, o.jsx)("h2", {
                                    className: "orbitron-txt my-4",
                                    children: "Rental Information",
                                  }),
                                }),
                                (0, o.jsxs)("div", {
                                  className: "col-lg-6",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Purpose of Rental",
                                    }),
                                    (0, o.jsxs)("select", {
                                      name: "purposeOfRental",
                                      className: "".concat(
                                        !0 == e
                                          ? "node-rental-form-input-light"
                                          : "node-rental-form-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      value: f.purposeOfRental,
                                      onChange: (e) => {
                                        let { name: a, value: n } = e.target,
                                          o = y(a, n);
                                        N({ ...b, [a]: o }),
                                          "other" == e.target.value
                                            ? h(!0)
                                            : ((f.purposeOfRental_other = ""),
                                              h(!1)),
                                          (f.purposeOfRental = e.target.value);
                                      },
                                      children: [
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "",
                                          children: "Purpose of Rental",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "AI Computing",
                                          children: "AI Computing",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "AI Model Training",
                                          children: "AI Model Training",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Graphic Rendering",
                                          children: "Graphic Rendering",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Gaming",
                                          children: "Gaming",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Scientific Research",
                                          children: "Scientific Research",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Mining",
                                          children: "Mining",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "IoT Computing",
                                          children: "IoT Computing",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "other",
                                          children: "other",
                                        }),
                                      ],
                                    }),
                                    b.purposeOfRental &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: b.purposeOfRental,
                                      }),
                                  ],
                                }),
                                (0, o.jsx)("div", {
                                  className: "col-lg-6",
                                  children: d
                                    ? (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)("label", {
                                            className: "orbitron-txt",
                                            children: "‘Other’",
                                          }),
                                          (0, o.jsx)("input", {
                                            type: "text",
                                            name: "purposeOfRental_other",
                                            value: f.purposeOfRental_other,
                                            onChange: (e) => R(e),
                                            required: !0,
                                            className: "".concat(
                                              !0 == e
                                                ? "node-rental-form-input-light"
                                                : "node-rental-form-input",
                                              " my-2 px-3 metrophobic-txt"
                                            ),
                                            placeholder:
                                              "Enter partnership enquiry",
                                          }),
                                          b.purposeOfRental_other &&
                                            (0, o.jsx)("span", {
                                              className: "text-danger",
                                              children: b.purposeOfRental_other,
                                            }),
                                        ],
                                      })
                                    : (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)("label", {
                                            className:
                                              "orbitron-txt disabled-label",
                                            children: "‘Other’",
                                          }),
                                          (0, o.jsx)("input", {
                                            type: "text",
                                            name: "purposeOfRental_other",
                                            value: f.purposeOfRental_other,
                                            onChange: (e) => R(e),
                                            required: !0,
                                            disabled: !0,
                                            className: "".concat(
                                              !0 == e
                                                ? "node-rental-form-input-light"
                                                : "disabled-input",
                                              " my-2 px-3 metrophobic-txt"
                                            ),
                                            placeholder:
                                              "Enter partnership enquiry",
                                          }),
                                        ],
                                      }),
                                }),
                                (0, o.jsxs)("div", {
                                  className: "col-lg-6",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Length of Rental",
                                    }),
                                    (0, o.jsxs)("select", {
                                      name: "lengthOfRental",
                                      className: "".concat(
                                        !0 == e
                                          ? "node-rental-form-input-light"
                                          : "node-rental-form-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      onChange: (e) => {
                                        let { name: a, value: n } = e.target,
                                          o = y(a, n);
                                        N({ ...b, [a]: o }),
                                          (f.lengthOfRental = e.target.value);
                                      },
                                      value: f.lengthOfRental,
                                      children: [
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "",
                                          children: "Length of Rental",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "0-6 hours",
                                          children: "0-6 hours",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "6-12 hours",
                                          children: "6-12 hours",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "12-24 hours",
                                          children: "12-24 hours",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "24+ hours",
                                          children: "24+ hours",
                                        }),
                                      ],
                                    }),
                                    b.lengthOfRental &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: b.lengthOfRental,
                                      }),
                                  ],
                                }),
                                (0, o.jsxs)("div", {
                                  className: "col-lg-6",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Power Required",
                                    }),
                                    (0, o.jsxs)("select", {
                                      name: "powerRequired",
                                      className: "".concat(
                                        !0 == e
                                          ? "node-rental-form-input-light"
                                          : "node-rental-form-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      onChange: (e) => {
                                        let { name: a, value: n } = e.target,
                                          o = y(a, n);
                                        N({ ...b, [a]: o }),
                                          (f.powerRequired = e.target.value);
                                      },
                                      value: f.powerRequired,
                                      children: [
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "",
                                          children: "Power Required",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "0-20 GB",
                                          children: "0-20 GB",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "20-50 GB",
                                          children: "20-50 GB",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "50-100 GB",
                                          children: "50-100 GB",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "100+ GB",
                                          children: "100+ GB",
                                        }),
                                      ],
                                    }),
                                    b.powerRequired &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: b.powerRequired,
                                      }),
                                  ],
                                }),
                                (0, o.jsx)("div", {
                                  className: "col-12",
                                  children: (0, o.jsx)("h2", {
                                    className: "orbitron-txt my-4",
                                    children: "For Our Benefit",
                                  }),
                                }),
                                (0, o.jsxs)("div", {
                                  className: "col-lg-6",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "How Did You Hear About Us?",
                                    }),
                                    (0, o.jsxs)("select", {
                                      name: "foundUs",
                                      className: "".concat(
                                        !0 == e
                                          ? "node-rental-form-input-light"
                                          : "node-rental-form-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      onChange: (e) => {
                                        let { name: a, value: n } = e.target,
                                          o = y(a, n);
                                        N({ ...b, [a]: o }),
                                          "Other" == e.target.value
                                            ? x(!0)
                                            : ((f.foundUs_other = ""), x(!1)),
                                          (f.foundUs = e.target.value);
                                      },
                                      value: f.foundUs,
                                      children: [
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "",
                                          children: "How did you hear about us",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Twitter",
                                          children: "Twitter",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Telegram",
                                          children: "Telegram",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Partner",
                                          children: "Partner",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Advertisement",
                                          children: "Advertisement",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Friend/family",
                                          children: "Friend/family",
                                        }),
                                        (0, o.jsx)("option", {
                                          className: "text-black",
                                          value: "Other",
                                          children: "Other",
                                        }),
                                      ],
                                    }),
                                    b.foundUs &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: b.foundUs,
                                      }),
                                  ],
                                }),
                                (0, o.jsx)("div", {
                                  className: "col-lg-6",
                                  children: p
                                    ? (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)("label", {
                                            className: "orbitron-txt",
                                            children: "‘Other’",
                                          }),
                                          (0, o.jsx)("input", {
                                            type: "text",
                                            name: "foundUs_other",
                                            value: f.foundUs_other,
                                            onChange: (e) => R(e),
                                            required: !0,
                                            className: "".concat(
                                              !0 == e
                                                ? "node-rental-form-input-light"
                                                : "node-rental-form-input",
                                              " my-2 px-3 metrophobic-txt"
                                            ),
                                            placeholder:
                                              "Enter partnership enquiry",
                                          }),
                                          b.foundUs_other &&
                                            (0, o.jsx)("span", {
                                              className: "text-danger",
                                              children: b.foundUs_other,
                                            }),
                                        ],
                                      })
                                    : (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)("label", {
                                            className:
                                              "orbitron-txt disabled-label",
                                            children: "‘Other’",
                                          }),
                                          (0, o.jsx)("input", {
                                            type: "text",
                                            name: "foundUs_other",
                                            value: f.foundUs_other,
                                            onChange: (e) => R(e),
                                            required: !0,
                                            disabled: !0,
                                            className: "".concat(
                                              !0 == e
                                                ? "node-rental-form-input-light"
                                                : "disabled-input",
                                              " my-2 px-3 metrophobic-txt"
                                            ),
                                            placeholder:
                                              "Enter partnership enquiry",
                                          }),
                                        ],
                                      }),
                                }),
                                (0, o.jsxs)("div", {
                                  className: "col-12",
                                  children: [
                                    (0, o.jsx)("label", {
                                      className: "orbitron-txt",
                                      children: "Length of Rental",
                                    }),
                                    (0, o.jsx)("input", {
                                      type: "text",
                                      name: "aditionalInfo",
                                      value: f.aditionalInfo,
                                      onChange: (e) => R(e),
                                      required: !0,
                                      className: "".concat(
                                        !0 == e
                                          ? "node-rental-form-input-light"
                                          : "node-rental-form-input",
                                        " my-2 px-3 metrophobic-txt"
                                      ),
                                      placeholder:
                                        "Have Any Additional Comments/Requirements? Let us know...",
                                    }),
                                    b.aditionalInfo &&
                                      (0, o.jsx)("span", {
                                        className: "text-danger",
                                        children: b.aditionalInfo,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, o.jsx)("div", {
                            className: "col-lg-4 node-rental-form-sec",
                          }),
                          (0, o.jsx)("div", {
                            className: "row m-0 p-0 py-3",
                            children: (0, o.jsx)("div", {
                              className: "col-12 text-center px-4",
                              children: (0, o.jsx)("button", {
                                className: "text-".concat(
                                  e ? "white" : "black",
                                  " custom-btn orbitron-txt mb-4 my-3 px-4 text-nowrap w-auto d-inline-block"
                                ),
                                onClick: w,
                                children: n
                                  ? (0, o.jsx)("div", {
                                      className:
                                        "spinner-border spinner-border-sm",
                                      role: "status",
                                      children: (0, o.jsx)("span", {
                                        className: "visually-hidden",
                                        children: "Loading...",
                                      }),
                                    })
                                  : "Submit",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, o.jsx)("div", {
                      className:
                        "text-left d-flex justify-content-center align-items-center hand-shake-img-sec pb-5",
                      children: (0, o.jsx)("div", {
                        className: "container-fluid",
                        children: (0, o.jsxs)("div", {
                          className: "row w-100",
                          children: [
                            (0, o.jsx)("div", { className: "col-lg-6" }),
                            (0, o.jsxs)("div", {
                              className: "col-lg-6 p-5",
                              children: [
                                (0, o.jsx)("h3", {
                                  className: "orbitron-txt hand-shake-title",
                                  children:
                                    "Are you looking to get involved in the Hex AI project?",
                                }),
                                (0, o.jsx)("p", {
                                  className: "metrophobic-txt",
                                  children:
                                    "Contact us today and let us know how you envision a partnership with us!",
                                })
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, o.jsx)(i.Ix, {
                      position: "bottom-left",
                      autoClose: 5e3,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    38049: function () {},
    42480: function () {},
  },
  function (e) {
    e.O(0, [1664, 5675, 1250, 9123, 2116, 2888, 9774, 179], function () {
      return e((e.s = 3743));
    }),
      (_N_E = e.O());
  },
]);
