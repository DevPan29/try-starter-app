import { createAction, props } from '@ngrx/store';

import { Vendor } from '../../models/vendor.model';

export const chooseVendor = createAction(
  '[Vendor interaction] Choose vendor',
  props<{ chosenVendor: Vendor }>()
);

export const clearVendor = createAction('[Vendor interaction] Clear vendor');