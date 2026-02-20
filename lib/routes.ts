const routes = {
    home: `/`,
    about: `/about`,
    leadership: {
        index: `/leadership`,
        clinicals: `/leadership/clinicals`,
        directors: `/leadership/directors`
    },


    onboarding: `/onboarding`,
    signup: `/onboarding?step=Sign Up`,
    login: `/login`,
    forgotPassword: `/forgot-password`,
    resetPassword: `/reset-password`,


    dashboard: `/dashboard`,
    appointment_booking: `/appointment-booking`,
    health_records: `/health-records`,
    emergency_services: `/emergency-services`,
    locate_facility: `/locate-facility`,
    prescriptions: `/prescriptions`,
    home_care: `/home-care`,
    programs: `/programs`,
    payments: `/payments`,
    ai_health_suggestions: `/ai-health-suggestions`,
    ricia_360_care: `/ricia-360-care`,

    subscription: `/subscription`,
    support: `/support`,
    settings: `/settings`,
    profile: `/profile`,


    doctor: {
        dashboard: `/doctor-dashboard`,
        appointment: `/doctor-appointments`,
        patientInteraction: `/doctor-patient-interaction`,
        financials: `/doctor-financials`,
        profile: `/doctor-profile`
    },

    nurse: {
        dashboard: `/nurse-dashboard`,
        triage: `/nurse-triage`,
        doctorRequests: `/nurse-doctor-requests`,
        patientManagement: `/nurse-patient-management`,
        followUp: `/nurse-follow-up`,
        reports: `/nurse-reports`,
    },

    institution: {
        dashboard: `/institution-dashboard`,
        emergencyRequests: `/institution-emergency-requests`,
        manageBranches: `/institution-manage-branches`,
        emergencyServices: `/institution-emergency-services`,
    },

    operations: {
        dashboard: `/operations-dashboard`,
        appointment: `/operations-appointment-bookings`,
        support: `operations-user-support`
    },

    finance: {
        dashboard: `/finance-dashboard`,
        transactions: `/finance-transaction-management`,
        report: `/finance-report-logs`,
    },

    officer: {
        dashboard: `/officer-dashboard`,
        docNurseOversight: `/officer-doctor-nurse-oversight`,
        patientCaseOversight: `/officer-patient-case-oversight`,
        consultation: `/officer-consultation-review`,
        prescription: `/officer-prescription-management`,
        emergency: `/officer-emergency-response`,
        reporting: `/officer-reporting-escalations`,
        flightRequest: `officer-emergency-flight-request`,
        requestFlight: `officer-emergency-flight-request/request-flight`
    },

    customerSupport: {
        dashboard: `/support-dashboard`,
        liveSupport: `/support-live-support`,
        ticketSystem: `/support-ticket-system`,
        knowledgeBase: `/support-knowledge-base`,
        complaintEscalation: `/support-complaint-escalation`,
        feedbackMonitoring: `/support-feedback-monitoring`,
        dailyReports: `/support-daily-reports`,
    },

    dispensary: {
        dashboard: `/dispensary-dashboard`,
        prescription: `/dispensary-prescription-management`,
        payment: `/dispensary-payment-invoice`,
        dispatch: `/dispensary-dispatch-coordination`,
        dispatcher: `/dispensary-dispatcher-management`,
    },

    admin: {
        dashboard: `/super-admin`,
        userManagement: `/admin-user-management`,
        auditLogs: `/admin-audit-logs`,
        analytics: `/admin-analytics`,
    },

}

export default routes