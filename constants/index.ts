export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-livingston.png",
    name: "Mike Ncube",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Bruce Chimoyo",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Arnold Tigere",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Peter Ndlovu",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Sanelisiwe Tshuma",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Sir Gazimbe",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Patrcik chimombe",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
