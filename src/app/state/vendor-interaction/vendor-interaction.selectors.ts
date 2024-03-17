import { createSelector, createFeatureSelector } from '@ngrx/store';

import { VendorInteractionState } from './vendor-interaction.reducer';

export const selectVendorInteraction = createFeatureSelector<VendorInteractionState>('vendorInteraction');

export const selectChosenVendor = createSelector(selectVendorInteraction, state => state.chosenVendor);