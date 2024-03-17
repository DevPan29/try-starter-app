import { InjectionToken } from '@angular/core';

export type VendorType =
  | 'MANUFACTURER'
  | 'WHOLESALER'
  | 'RETAILER'
  | 'TRADESHOWREPRESENTATIVE';

export interface Vendor {
  id: string;
  name: string;
  type: VendorType;
}

export const READABLE_VENDOR_TYPES_MAP = new InjectionToken<Record<VendorType, string>>('READABLE_VENDOR_TYPES_MAP');