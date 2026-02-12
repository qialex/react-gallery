import { createAction, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { Image } from "../types";
import { RootState } from "../store";
import { imagesEditorKey } from "./imageEditorSlice";

export const imagesKey = "images"

type ImagesState = {
  entities: { [id: Image['id']]: Image },
};

export const initialState: ImagesState = {
  entities: {},
};

export const imagesEntitiesAddUpdateAction = createAction<Image[]>(`${imagesEditorKey}/entities/addUpdate`)

export const imageSlice = createSlice({
  name: imagesKey,
  initialState,
  reducers: {
    // reducer
    // prepare
  },
  extraReducers: (builder) => {
    builder
      .addCase(imagesEntitiesAddUpdateAction, (state, action) => {
        action.payload.forEach(element => {
          state.entities[element.id] = element
        });
      })
  },
});

export default imageSlice.reducer;


// Base selector
const selectImageEntities = (state: RootState) => state[imagesKey].entities;
const selectEditorEntities = (state: RootState) => state[imagesEditorKey].entities;

// Selector factory for getting image by ID - returns a memoized selector
export const makeSelectImageById = (id: number) =>
  createSelector(
    [selectImageEntities],
    (entities) => entities[id] || undefined
  );

// For backwards compatibility
export const getItemById = (id: number) => (state: RootState): Image|undefined => {
  return state[imagesKey].entities[id] || undefined
}

// Selector factory for image canvas - returns a memoized selector
export const makeSelectImageUrlForCanvas = (id: number, showEdited: boolean) =>
  createSelector(
    [selectEditorEntities, selectImageEntities],
    (editorEntities, imageEntities) => {
      const editorItem = editorEntities[id];
      const image = imageEntities[id];

      // If we need the edited version and it exists, use it
      if (showEdited && editorItem?.url) {
        return editorItem.url;
      }

      // Otherwise, use the original image download URL
      if (image?.downloadUrl) {
        return image.downloadUrl;
      }

      // If neither exists, return empty string
      return '';
    }
  );

// For backwards compatibility - but prefer using makeSelectImageUrlForCanvas
export const getImageUrlForCanvas = (id: number, showEdited: boolean) => (state: RootState) => {
  const editorItem = state[imagesEditorKey].entities[id]
  const image = getItemById(id)(state)

  // If we need the edited version and it exists, use it
  if (showEdited && editorItem?.url) {
    return editorItem.url
  }

  // Otherwise, use the original image download URL
  if (image?.downloadUrl) {
    return image.downloadUrl
  }

  // If neither exists, return empty string
  return ''
}
