import mongoose, { Document, Schema } from 'mongoose';

export interface GeneralSettings {
  siteName: string;
  siteDescription?: string;
  siteUrl: string;
  adminEmail: string;
  timezone: string;
  language: string;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
  inquiryAlerts: boolean;
  projectUpdates: boolean;
  systemAlerts: boolean;
}

export interface SecuritySettings {
  twoFactorAuth: boolean;
  sessionTimeout: number;
  passwordPolicy: {
    minLength: number;
    requireUppercase: boolean;
    requireNumbers: boolean;
    requireSymbols: boolean;
  };
  ipWhitelist: string[];
}

export interface AppearanceSettings {
  theme: 'light' | 'dark' | 'system';
  primaryColor: string;
  logo?: string;
  favicon?: string;
}

export interface IntegrationSettings {
  googleAnalytics?: string;
  facebookPixel?: string;
  mailchimpApiKey?: string;
  slackWebhook?: string;
}

export interface BackupSettings {
  autoBackup: boolean;
  backupFrequency: 'daily' | 'weekly' | 'monthly';
  backupRetention: number;
  lastBackup?: string;
}

export interface ISettings extends Document {
  general: GeneralSettings;
  notifications: NotificationSettings;
  security: SecuritySettings;
  appearance: AppearanceSettings;
  integrations: IntegrationSettings;
  backup: BackupSettings;
  createdAt: Date;
  updatedAt: Date;
}

const settingsSchema = new Schema<ISettings>(
  {
    general: {
      type: Schema.Types.Mixed,
      default: {}
    },
    notifications: {
      type: Schema.Types.Mixed,
      default: {}
    },
    security: {
      type: Schema.Types.Mixed,
      default: {}
    },
    appearance: {
      type: Schema.Types.Mixed,
      default: {}
    },
    integrations: {
      type: Schema.Types.Mixed,
      default: {}
    },
    backup: {
      type: Schema.Types.Mixed,
      default: {}
    }
  },
  {
    timestamps: true
  }
);

// Ensure only one settings document exists
// settingsSchema.index({}, { unique: true });

const Settings = mongoose.models.Settings || mongoose.model<ISettings>('Settings', settingsSchema);

export default Settings;