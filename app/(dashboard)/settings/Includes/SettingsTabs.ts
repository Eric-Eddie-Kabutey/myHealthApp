type PatientTabType = 'Personal Details' | 'Emergency Contacts' | 'Notification' | 'Language Accessibility';
const patientTabs: PatientTabType[] = [
    'Personal Details',
    'Emergency Contacts',
    'Notification',
    'Language Accessibility'
];

type DoctorTabType = 'Personal Details' | 'Notification' | 'Language Accessibility';
const doctorTabs: DoctorTabType[] = [
    'Personal Details',
    'Notification',
    'Language Accessibility'
];

export {
    patientTabs, doctorTabs
}