(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6091],
  {
    25670: function (e, a, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/partner-enquiry-form",
        function () {
          return n(93092);
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
      var t = n(81354),
        o = n.n(t);
      let r = (e) => o().AES.encrypt(e, "ATLTEST123").toString();
    },
    93092: function (e, a, n) {
      "use strict";
      n.r(a);
      var t = n(85893),
        o = n(84769),
        r = n(93962),
        i = n(67294);
      n(93493), n(36501);
      var s = n(55678);
      n(79422);
      var c = n(41664),
        d = n.n(c),
        l = n(4298),
        m = n.n(l),
        h = n(29017);
      a.default = () => {
        let [e, a] = (0, i.useState)(!1),
          [n, c] = (0, i.useState)(!1),
          [l, u] = (0, i.useState)(!1),
          [p, _] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
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
        let y = [
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
          ],
          [b, x] = (0, i.useState)({
            partnershipEnquiry: "",
            email: "",
            phone: "",
            country: "",
            organization: "",
            job_title: "",
            type_of_partnership: "",
            type_of_partnership_other: "",
            how_did_you_hear_about_us: "",
            how_did_you_hear_about_us_other: "",
            length_of_rental: "",
            html: "",
            subject: "",
          }),
          [g, j] = (0, i.useState)({
            partnershipEnquiry: "",
            email: "",
            phone: "",
            country: "",
            organization: "",
            job_title: "",
            type_of_partnership: "",
            type_of_partnership_other: "",
            how_did_you_hear_about_us: "",
            how_did_you_hear_about_us_other: "",
            length_of_rental: "",
          }),
          f = [
            {
              name: "partnershipEnquiry",
              message: "Please enter partnership enquiry name",
            },
            { name: "email", message: "Please enter email" },
            { name: "phone", message: "Please enter phone" },
            { name: "country", message: "Please enter country" },
            { name: "organization", message: "Please enter organization" },
            { name: "job_title", message: "Please enter job title" },
            {
              name: "type_of_partnership",
              message: "Please enter type of partnership",
            },
            {
              name: "how_did_you_hear_about_us",
              message: "Please enter type of how did you hear about us",
            },
            {
              name: "length_of_rental",
              message: "Please enter length of rental",
            },
          ],
          N = (e, a) => {
            switch (e) {
              case "email":
                if (!a) return "Please enter email";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a))
                  return "Invalid email address";
                return "";
              case "partnershipEnquiry":
                if (!a) return "Please enter partnership enquiry name";
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
              case "job_title":
                if (!a) return "Please enter job title";
                return "";
              case "type_of_partnership":
                if (!a) return "Please enter type of partnership";
                return "";
              case "type_of_partnership_other":
                if (!a) return "Please enter type of other partnership";
                return "";
              case "how_did_you_hear_about_us":
                if (!a) return "Please enter type of how did you hear about us";
                return "";
              case "how_did_you_hear_about_us_other":
                if (!a)
                  return "Please enter type of other how did you hear about us";
                return "";
              case "length_of_rental":
                if (!a) return "Please enter length of rental";
                return "";
              default:
                return "";
            }
          },
          w = (e) => {
            e.preventDefault();
            let { name: a, value: n } = e.target;
            x({ ...b, [a]: n });
            let t = N(a, n);
            j({ ...g, [a]: t });
          },
          v = async (e) => {
            e.preventDefault(),
              await window.grecaptcha.ready(() => {
                window.grecaptcha
                  .execute("6Le0thYqAAAAAJ4ScsAZ24oCtA72jqVDaoWwKcdm", {
                    action: "submit",
                  })
                  .then(async (e) => {
                    if (!e) {
                      s.Am.error(
                        "The Google reCaptcha Token is missing, Something went wrong"
                      ),
                        c(!1);
                      return;
                    }
                  })
                  .catch((e) => {
                    c(!1), console.log(e.message);
                  });
              });
            let a = N("partnershipEnquiry", b.partnershipEnquiry),
              n = N("email", b.email),
              o = N("phone", b.phone),
              r = N("country", b.country),
              i = N("organization", b.organization),
              d = N("job_title", b.job_title),
              m = N("type_of_partnership", b.type_of_partnership),
              y = N("type_of_partnership_other", b.type_of_partnership_other),
              g = N("how_did_you_hear_about_us", b.how_did_you_hear_about_us),
              w = N(
                "how_did_you_hear_about_us_other",
                b.how_did_you_hear_about_us_other
              ),
              v = N("length_of_rental", b.length_of_rental);
            if (
              ((b.html =
                "Partnership Enquiry : " +
                b.partnershipEnquiry +
                "<br/>Email : " +
                b.email +
                "<br/>Phone : " +
                b.phone +
                "<br/>Country : " +
                b.country +
                "<br/>Organization : " +
                b.organization +
                "<br/>Job title : " +
                b.job_title +
                "<br/>Type of Partnership : " +
                b.type_of_partnership +
                "<br/>Type of Partnership other: " +
                b.type_of_partnership_other +
                "<br/>How Did You Hear About Us?: " +
                b.how_did_you_hear_about_us +
                "<br/>How Did You Hear About Us other?: " +
                b.how_did_you_hear_about_us_other +
                "<br/>Length of Rental: " +
                b.length_of_rental +
                "<br/>"),
              (b.subject = "Hex AI : Partnership Enquiry Form"),
              x(b),
              a || n || o || r || i || d || m || g || v)
            ) {
              j({
                partnershipEnquiry: a,
                email: n,
                phone: o,
                country: r,
                organization: i,
                job_title: d,
                type_of_partnership: m,
                how_did_you_hear_about_us: g,
                length_of_rental: v,
              });
              return;
            }
            if ((!0 == l && y) || (!0 == p && w)) {
              j({
                type_of_partnership_other: y,
                how_did_you_hear_about_us_other: w,
              });
              return;
            }
            "Other" == b.type_of_partnership_other &&
              f.push({
                name: "type_of_partnership_other",
                message: "Please enter type of other partnership",
              }),
              "Other" == b.how_did_you_hear_about_us_other &&
                f.push({
                  name: "how_did_you_hear_about_us_other",
                  message:
                    "Please enter type of other how did you hear about us",
                }),
              c(!0);
            try {
              let e = (0, h.l)(JSON.stringify(b)),
                a = (0, h.l)(JSON.stringify(f)),
                n = "https://hashai.co.uk/api";
              window.location.hostname.includes("www") &&
                !n.includes("www") &&
                (n = "https://hashai.co.uk/api".replace(
                  /^https:\/\//,
                  "https://www."
                ));
              let o = await fetch("".concat(n, "/sendemail"), {
                  method: "POST",
                  body: JSON.stringify({ data: e, value: a }),
                  headers: { "Content-Type": "application/json" },
                }),
                r = await o.json();
              r && (null == r ? void 0 : r.message)
                ? (s.Am.success(null == r ? void 0 : r.message),
                  x({
                    partnershipEnquiry: "",
                    email: "",
                    phone: "",
                    country: "",
                    organization: "",
                    job_title: "",
                    type_of_partnership: "",
                    type_of_partnership_other: "",
                    how_did_you_hear_about_us: "",
                    how_did_you_hear_about_us_other: "",
                    length_of_rental: "",
                    html: "",
                    subject: "",
                  }))
                : s.Am.error(
                    (0, t.jsx)("div", {
                      dangerouslySetInnerHTML: { __html: r.error },
                    })
                  );
            } catch (e) {
              console.error("Error submitting form:", e);
            } finally {
              c(!1), u(!1), _(!1);
            }
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(r.Z, {
              title:
                "Become a Hex AI Partner: Forge a Winning Future in Crypto",
              metaTitle:
                "Partner with Hex AI: Fuel Crypto Mining Growth & Innovation - Contact Us Today!",
              metaDescription:
                "Explore partnership opportunities with Hex AI! We're seeking industry leaders to shape the future of crypto mining. Contact us today and unlock a world of mutual growth and innovation.",
            }),
            (0, t.jsxs)(o.Z, {
              children: [
                (0, t.jsx)(m(), {
                  src: "https://www.google.com/recaptcha/api.js?render=".concat(
                    "6Le0thYqAAAAAJ4ScsAZ24oCtA72jqVDaoWwKcdm"
                  ),
                }),
                (0, t.jsxs)("section", {
                  className: "bg-"
                    .concat(e ? "white" : "black", " text-")
                    .concat(e ? "black" : "white", " py-5"),
                  children: [
                    (0, t.jsxs)("div", {
                      className: "bg-"
                        .concat(e ? "white" : "black", " text-")
                        .concat(
                          e ? "black" : "white",
                          " container-fluid px-3 px-lg-5 pb-4"
                        ),
                      children: [
                        (0, t.jsx)("section", {
                          className: "m-0 p-0 text-center mb-5",
                          children: (0, t.jsxs)("h1", {
                            className: "orbitron-txt",
                            children: [
                              "Join the Hex AI Partnership Team",
                              (0, t.jsx)("span", {
                                className: "d-block gradient-font",
                                children: "Unlock Exclusive Perks",
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "row m-0 pb-0 border-color z-0 p-4",
                          children: [
                            (0, t.jsx)("div", {
                              className: "col-12 mb-5",
                              children: (0, t.jsx)("h2", {
                                className: "orbitron-txt text-center",
                                children: "Partnership Enquiry",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "col-lg-8 col-12",
                              children: (0, t.jsxs)("div", {
                                className: "row m-0 p-0",
                                children: [
                                  (0, t.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                      class: "mb-3",
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor: "partnershipEnquiry",
                                          class: "orbitron-txt",
                                          children: "Partnership Enquiry",
                                        }),
                                        (0, t.jsx)("input", {
                                          type: "text",
                                          name: "partnershipEnquiry",
                                          id: "partnershipEnquiry",
                                          value: b.partnershipEnquiry,
                                          onChange: (e) => w(e),
                                          required: !0,
                                          className: "".concat(
                                            !0 == e
                                              ? "partnership-enquiry-input-light"
                                              : "partnership-enquiry-input",
                                            " my-2 px-3 metrophobic-txt"
                                          ),
                                          placeholder: "Enter your full name..",
                                        }),
                                        g.partnershipEnquiry &&
                                          (0, t.jsx)("span", {
                                            className: "text-danger",
                                            children: g.partnershipEnquiry,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                      class: "mb-3",
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor: "email",
                                          class: "orbitron-txt",
                                          children: "Email",
                                        }),
                                        (0, t.jsx)("input", {
                                          type: "email",
                                          name: "email",
                                          id: "email",
                                          value: b.email,
                                          onChange: (e) => w(e),
                                          required: !0,
                                          className: "".concat(
                                            !0 == e
                                              ? "partnership-enquiry-input-light"
                                              : "partnership-enquiry-input",
                                            " my-2 px-3 metrophobic-txt"
                                          ),
                                          placeholder: "Enter your email..",
                                        }),
                                        g.email &&
                                          (0, t.jsx)("span", {
                                            className: "text-danger",
                                            children: g.email,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                      class: "mb-3",
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor: "phone",
                                          class: "orbitron-txt",
                                          children: "Phone",
                                        }),
                                        (0, t.jsx)("input", {
                                          type: "number",
                                          name: "phone",
                                          id: "phone",
                                          value: b.phone,
                                          onChange: (e) => w(e),
                                          required: !0,
                                          className: "".concat(
                                            !0 == e
                                              ? "partnership-enquiry-input-light"
                                              : "partnership-enquiry-input",
                                            " my-2 px-3 metrophobic-txt"
                                          ),
                                          placeholder:
                                            "Enter your phone number..",
                                        }),
                                        g.phone &&
                                          (0, t.jsx)("span", {
                                            className: "text-danger",
                                            children: g.phone,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                      class: "mb-3",
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor: "country",
                                          class: "orbitron-txt",
                                          children: "Country",
                                        }),
                                        (0, t.jsxs)("select", {
                                          name: "country",
                                          id: "country",
                                          onChange: (e) => {
                                            let { name: a, value: n } =
                                                e.target,
                                              t = N(a, n);
                                            j({ ...g, [a]: t }),
                                              (b.country = e.target.value);
                                          },
                                          className: "".concat(
                                            !0 == e
                                              ? "partnership-enquiry-input-light"
                                              : "partnership-enquiry-input",
                                            " my-2 px-3 metrophobic-txt"
                                          ),
                                          value: b.country,
                                          children: [
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "",
                                              children: "Select your country",
                                            }),
                                            null == y
                                              ? void 0
                                              : y.map((e, a) =>
                                                  (0, t.jsx)(t.Fragment, {
                                                    children: (0, t.jsx)(
                                                      "option",
                                                      {
                                                        value: e.name,
                                                        className: "text-black",
                                                        children: e.name,
                                                      }
                                                    ),
                                                  })
                                                ),
                                          ],
                                        }),
                                        g.country &&
                                          (0, t.jsx)("span", {
                                            className: "text-danger",
                                            children: g.country,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                      class: "mb-3",
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor: "organization",
                                          class: "orbitron-txt",
                                          children: "Organization",
                                        }),
                                        (0, t.jsx)("input", {
                                          type: "text",
                                          name: "organization",
                                          id: "organization",
                                          value: b.organization,
                                          required: !0,
                                          onChange: (e) => w(e),
                                          className: "".concat(
                                            !0 == e
                                              ? "partnership-enquiry-input-light"
                                              : "partnership-enquiry-input",
                                            " my-2 px-3 metrophobic-txt"
                                          ),
                                          placeholder:
                                            "Enter your organization..",
                                        }),
                                        g.organization &&
                                          (0, t.jsx)("span", {
                                            className: "text-danger",
                                            children: g.organization,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                      class: "mb-3",
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor: "job_title",
                                          class: "orbitron-txt",
                                          children: "Job Title",
                                        }),
                                        (0, t.jsx)("input", {
                                          type: "text",
                                          name: "job_title",
                                          value: b.job_title,
                                          id: "job_title",
                                          required: !0,
                                          onChange: (e) => w(e),
                                          className: "".concat(
                                            !0 == e
                                              ? "partnership-enquiry-input-light"
                                              : "partnership-enquiry-input",
                                            " my-2 px-3 metrophobic-txt"
                                          ),
                                          placeholder: "Enter your job title..",
                                        }),
                                        g.job_title &&
                                          (0, t.jsx)("span", {
                                            className: "text-danger",
                                            children: g.job_title,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                      class: "mb-3",
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor: "type_of_partnership",
                                          class: "orbitron-txt",
                                          children: "Type of Partnership",
                                        }),
                                        (0, t.jsxs)("select", {
                                          name: "type_of_partnership",
                                          id: "type_of_partnership",
                                          onChange: (e) => {
                                            let { name: a, value: n } =
                                                e.target,
                                              t = N(a, n);
                                            j({ ...g, [a]: t }),
                                              "Other" == e.target.value
                                                ? u(!0)
                                                : ((b.type_of_partnership_other =
                                                    ""),
                                                  u(!1)),
                                              (b.type_of_partnership =
                                                e.target.value);
                                          },
                                          className: "".concat(
                                            !0 == e
                                              ? "partnership-enquiry-input-light"
                                              : "partnership-enquiry-input",
                                            " my-2 px-3 metrophobic-txt"
                                          ),
                                          value: b.type_of_partnership,
                                          children: [
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "",
                                              children:
                                                "Select Your Partnership",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "Business",
                                              children: "Business",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "Hardware",
                                              children: "Hardware",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "Influencer",
                                              children: "Influencer",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "Sponsor",
                                              children: "Sponsor",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "Other",
                                              children: "Other",
                                            }),
                                          ],
                                        }),
                                        g.type_of_partnership &&
                                          (0, t.jsx)("span", {
                                            className: "text-danger",
                                            children: g.type_of_partnership,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, t.jsx)("div", {
                                      class: "mb-3",
                                      children: l
                                        ? (0, t.jsxs)(t.Fragment, {
                                            children: [
                                              (0, t.jsx)("label", {
                                                htmlFor:
                                                  "type_of_partnership_other",
                                                class: "orbitron-txt",
                                                children: "Other",
                                              }),
                                              (0, t.jsx)("input", {
                                                type: "text",
                                                name: "type_of_partnership_other",
                                                id: "type_of_partnership_other",
                                                onChange: (e) => w(e),
                                                value:
                                                  b.type_of_partnership_other,
                                                required: !0,
                                                className: "".concat(
                                                  !0 == e
                                                    ? "partnership-enquiry-input-light"
                                                    : "partnership-enquiry-input",
                                                  " my-2 px-3 metrophobic-txt"
                                                ),
                                                placeholder:
                                                  "Enter partnership enquiry",
                                              }),
                                              g.type_of_partnership_other &&
                                                (0, t.jsx)("span", {
                                                  className: "text-danger",
                                                  children:
                                                    g.type_of_partnership_other,
                                                }),
                                            ],
                                          })
                                        : (0, t.jsxs)(t.Fragment, {
                                            children: [
                                              (0, t.jsx)("label", {
                                                htmlFor:
                                                  "type_of_partnership_other",
                                                class:
                                                  "orbitron-txt disabled-label",
                                                children: "Other",
                                              }),
                                              (0, t.jsx)("input", {
                                                type: "text",
                                                name: "type_of_partnership_other",
                                                id: "type_of_partnership_other",
                                                onChange: (e) => w(e),
                                                value:
                                                  b.type_of_partnership_other,
                                                disabled: !0,
                                                required: !0,
                                                className: "".concat(
                                                  !0 == e
                                                    ? "partnership-enquiry-input-light"
                                                    : "disabled-input",
                                                  " my-2 px-3 metrophobic-txt"
                                                ),
                                                placeholder:
                                                  "Enter partnership enquiry",
                                              }),
                                            ],
                                          }),
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                      class: "mb-3",
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor: "how_did_you_hear_about_us",
                                          class: "orbitron-txt",
                                          children:
                                            "How Did You Hear About Us?",
                                        }),
                                        (0, t.jsxs)("select", {
                                          name: "how_did_you_hear_about_us",
                                          id: "how_did_you_hear_about_us",
                                          onChange: (e) => {
                                            let { name: a, value: n } =
                                                e.target,
                                              t = N(a, n);
                                            j({ ...g, [a]: t }),
                                              "Other" == e.target.value
                                                ? _(!0)
                                                : ((b.how_did_you_hear_about_us_other =
                                                    ""),
                                                  _(!1)),
                                              (b.how_did_you_hear_about_us =
                                                e.target.value);
                                          },
                                          className: "".concat(
                                            !0 == e
                                              ? "partnership-enquiry-input-light"
                                              : "partnership-enquiry-input",
                                            " my-2 px-3 metrophobic-txt"
                                          ),
                                          value: b.how_did_you_hear_about_us,
                                          children: [
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "",
                                              disabled: "",
                                              selected: "",
                                              children:
                                                "How did you hear about us",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "Social Media",
                                              children: "Social Media",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value:
                                                "Search Engine (e.g., Google, Bing)",
                                              children:
                                                "Search Engine (e.g., Google, Bing)",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "Online Advertisement",
                                              children: "Online Advertisement",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "Friend or Colleague",
                                              children: "Friend or Colleague",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "News Article or Blog",
                                              children: "News Article or Blog",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "Event or Conference",
                                              children: "Event or Conference",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "Email Newsletter",
                                              children: "Email Newsletter",
                                            }),
                                            (0, t.jsx)("option", {
                                              className: "text-black",
                                              value: "Other",
                                              children: "Other",
                                            }),
                                          ],
                                        }),
                                        g.how_did_you_hear_about_us &&
                                          (0, t.jsx)("span", {
                                            className: "text-danger",
                                            children:
                                              g.how_did_you_hear_about_us,
                                          }),
                                      ],
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "col-12 col-md-6",
                                    children: (0, t.jsx)("div", {
                                      class: "mb-3",
                                      children: p
                                        ? (0, t.jsxs)(t.Fragment, {
                                            children: [
                                              (0, t.jsx)("label", {
                                                htmlFor:
                                                  "how_did_you_hear_about_us_other",
                                                class: "orbitron-txt",
                                                children: "Other",
                                              }),
                                              (0, t.jsx)("input", {
                                                type: "text",
                                                name: "how_did_you_hear_about_us_other",
                                                id: "how_did_you_hear_about_us_other",
                                                value:
                                                  b.how_did_you_hear_about_us_other,
                                                onChange: (e) => w(e),
                                                required: !0,
                                                className: "".concat(
                                                  !0 == e
                                                    ? "partnership-enquiry-input-light"
                                                    : "partnership-enquiry-input",
                                                  " my-2 px-3 metrophobic-txt"
                                                ),
                                                placeholder:
                                                  "Enter partnership enquiry",
                                              }),
                                              g.how_did_you_hear_about_us_other &&
                                                (0, t.jsx)("span", {
                                                  className: "text-danger",
                                                  children:
                                                    g.how_did_you_hear_about_us_other,
                                                }),
                                            ],
                                          })
                                        : (0, t.jsxs)(t.Fragment, {
                                            children: [
                                              (0, t.jsx)("label", {
                                                htmlFor:
                                                  "how_did_you_hear_about_us_other",
                                                class:
                                                  "orbitron-txt disabled-label",
                                                children: "Other",
                                              }),
                                              (0, t.jsx)("input", {
                                                type: "text",
                                                name: "how_did_you_hear_about_us_other",
                                                id: "how_did_you_hear_about_us_other",
                                                value:
                                                  b.how_did_you_hear_about_us_other,
                                                onChange: (e) => w(e),
                                                required: !0,
                                                disabled: !0,
                                                className: "".concat(
                                                  !0 == e
                                                    ? "partnership-enquiry-input-light"
                                                    : "disabled-input",
                                                  " my-2 px-3 metrophobic-txt"
                                                ),
                                                placeholder:
                                                  "Enter partnership enquiry",
                                              }),
                                            ],
                                          }),
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "col-12 col-md-12",
                                    children: (0, t.jsxs)("div", {
                                      class: "mb-3",
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor:
                                            "how_did_you_hear_about_us_other",
                                          class: "orbitron-txt",
                                          children: "Length of Rental",
                                        }),
                                        (0, t.jsx)("input", {
                                          type: "text",
                                          id: "length_of_rental",
                                          name: "length_of_rental",
                                          required: !0,
                                          onChange: (e) => w(e),
                                          value: b.length_of_rental,
                                          className: "".concat(
                                            !0 == e
                                              ? "partnership-enquiry-input-light"
                                              : "partnership-enquiry-input",
                                            " my-2 px-3 metrophobic-txt"
                                          ),
                                          placeholder:
                                            "Have Any Additional Comments/Requirements? Let us know...",
                                        }),
                                        g.length_of_rental &&
                                          (0, t.jsx)("span", {
                                            className: "text-danger",
                                            children: g.length_of_rental,
                                          }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "col-lg-4 d-lg-block d-none partnership-enquiry-sec m-0 p-0",
                            }),
                            (0, t.jsx)("div", {
                              className: "row m-0 p-0 py-3",
                              children: (0, t.jsx)("div", {
                                className: "col-12 text-center px-4",
                                children: (0, t.jsx)("button", {
                                  className: "text-".concat(
                                    e ? "white" : "black",
                                    " custom-btn orbitron-txt mb-4 my-3 px-4 text-nowrap w-auto d-inline-block"
                                  ),
                                  onClick: v,
                                  children: n
                                    ? (0, t.jsx)("div", {
                                        className:
                                          "spinner-border spinner-border-sm",
                                        role: "status",
                                        children: (0, t.jsx)("span", {
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
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "container-fluid px-sm-5 px-md-5 d-none d-lg-block",
                      children: (0, t.jsx)("div", {
                        className:
                          "row px-0 my-5 mx-2 d-flex justify-content-center align-items-center learn_more_section",
                        "data-aos": "flip-up",
                        children: (0, t.jsxs)("div", {
                          className:
                            "col-lg-8 learn-more-sec p-4 d-flex justify-content-evenly align-items-center",
                          children: [
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("h2", {
                                  className: "metrophobic-txt display-3",
                                  children: "Hex AI Community",
                                }),
                                (0, t.jsx)("p", {
                                  className: "my-2",
                                  children:
                                    "Get Involved in Our Community on Telegram and Stay Up-to-Date with Our Latest Announcements on X",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "d-flex flex-column text-center align-items-center justify-content-center",
                              children: [
                                (0, t.jsx)(d(), {
                                  href: "https://x.com/",
                                  target: "_blank",
                                  children: (0, t.jsx)("img", {
                                    src: "".concat(
                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/partner-enquiry-form/twiter-img.svg"
                                    ),
                                    className: "twiterImg",
                                    alt: "twiterImg",
                                    height: "51px",
                                    width: "54px",
                                  }),
                                }),
                                (0, t.jsx)(d(), {
                                  href: "https://t.me/",
                                  target: "_blank",
                                  children: (0, t.jsx)("img", {
                                    src: "".concat(
                                      "https://hashai.s3.eu-west-2.amazonaws.com/storage/partner-enquiry-form/message-img.svg"
                                    ),
                                    className: "messageImg",
                                    alt: "messageImg",
                                    height: "51px",
                                    width: "54px",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)(s.Ix, { position: "bottom-left", autoClose: 5e3 }),
          ],
        });
      };
    },
    93493: function () {},
    42480: function () {},
  },
  function (e) {
    e.O(0, [1664, 1250, 9123, 2116, 2888, 9774, 179], function () {
      return e((e.s = 25670));
    }),
      (_N_E = e.O());
  },
]);
