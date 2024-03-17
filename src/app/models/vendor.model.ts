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