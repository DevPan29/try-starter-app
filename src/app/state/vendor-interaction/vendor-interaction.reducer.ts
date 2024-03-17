import { createReducer, on } from '@ngrx/store';

import * as VendorInteractionActions from './vendor-interaction.actions';
import { Vendor } from '../../models/vendor.model';

export interface VendorInteractionState {
  chosenVendor: Vendor | null
}

const initialVendorInteractionState: VendorInteractionState = {
  chosenVendor: null
};

export const vendorInteractionReducer = createReducer(
  initialVendorInteractionState,
  on(VendorInteractionActions.chooseVendor, (state, { chosenVendor }) => ({ ...state, chosenVendor })),
  on(VendorInteractionActions.clearVendor, state => ({ ...state, chosenVendor: null }))
);