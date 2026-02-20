export namespace NAuthentication {
    export interface IResetPassword {
        password: string;
        password_confirmation: string;
        password_reset_token: string;
    }

    export interface ILogin {
        email: string;
        password: string;
    }

    export type TAccountType = 'Patient' | 'Doctor' | 'Nurse' | 'Institution' | '';
    export interface ISignUp {
        accountType: TAccountType;
        email: string;
    }

    export type TRoleType = 'admin' | 'doctor' | 'patient' | 'nurse' | 'institution' | 'operations' | 'officer' | 'finance' | 'support' | 'dispensary';
    export interface IUser {
        email: string;
        phone: string;
        firstName: string;
        lastName: string;
        role: TRoleType | ''
    }
}