import {
  BoxProps,
  CSSObject,
  FlexProps,
  InputProps,
  WrapProps,
} from "@chakra-ui/react";
import { MaybeRenderProp } from "@chakra-ui/react-utils";
import React, { Dispatch, SetStateAction } from "react";

import { AutoCompleteGroupProps } from "./autocomplete-group";
import { AutoCompleteInputProps } from "./autocomplete-input";
import { AutoCompleteProps } from "./autocomplete";
import { AutoCompleteItemProps } from "./autocomplete-item";

export interface Item {
  value: any;
  label?: any;
  fixed?: boolean;
  disabled?: boolean;
  itemVal?: any;
  noFilter?: boolean;
}

export type UseAutoCompleteProps = Partial<{
  closeOnBlur: boolean;
  closeOnSelect: boolean;
  creatable: boolean;
  defaultIsOpen: boolean;
  defaultValues: Item["value"] | Item["value"][];
  emphasize: boolean | CSSObject;
  emptyState: boolean | MaybeRenderProp<{ value: Item["value"] }>;
  filter: (
    query: string,
    optionValue: Item["value"],
    optionLabel: Item["label"]
  ) => boolean;
  focusInputOnSelect: boolean;
  freeSolo: boolean;
  isReadOnly: boolean;
  listAllValuesOnFocus: boolean;
  maxSelections: number;
  maxSuggestions: number;
  multiple: boolean;
  onChange: (
    value: Item["value"] | Item["value"][],
    item: Item | Item[]
  ) => void;
  onSelectOption: (params: {
    optionValue: Item["value"];
    optionLabel: Item["label"];
    item: Item;
    selectMethod: "mouse" | "keyboard" | null;
    isNewInput: boolean;
  }) => boolean | void;
  onOptionFocus: (params: {
    optionValue: Item["value"];
    optionLabel: Item["label"];
    item: Item;
    selectMethod: "mouse" | "keyboard" | null;
    isNewInput: boolean;
  }) => boolean | void;
  onTagRemoved: (
    removedTag: Item["value"],
    item: Item,
    tags: ItemTag[]
  ) => void;
  onReady: (params: OnReadyProps) => void;
  openOnFocus: boolean;
  rollNavigation: boolean;
  selectOnFocus: boolean;
  shouldRenderSuggestions: (value: string) => boolean;
  suggestWhenEmpty: boolean;
}>;

export type ItemTag = { label: any; onRemove: () => void };

export type OnReadyProps = {
  tags: ItemTag[];
};

export type InputReturnProps = {
  wrapper: {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    ref: React.RefObject<HTMLDivElement>;
  } & WrapProps;
  input: InputProps;
};

export type ItemReturnProps = {
  item: FlexProps;
  root: {
    isValidSuggestion: boolean;
    value: AutoCompleteItemProps["value"];
  };
};

export type ListReturnProps = {
  width: number;
};

export type GroupReturnProps = {
  divider: {
    hasFirstChild: boolean;
    hasLastChild: boolean;
  };
  group: BoxProps;
};

export type UseAutoCompleteReturn = {
  autoCompleteProps: AutoCompleteProps;
  children: React.ReactNode;
  filteredList: Item[];
  filteredResults: Item[];
  focusedValue: Item["value"];
  getEmptyStateProps: (component: any) => any;
  getGroupProps: (props: AutoCompleteGroupProps) => GroupReturnProps;
  getInputProps: (
    props: AutoCompleteInputProps,
    themeInput?: any
  ) => InputReturnProps;
  getItemProps: (props: AutoCompleteItemProps) => ItemReturnProps;
  getListProps: () => ListReturnProps;
  inputRef: React.RefObject<HTMLInputElement>;
  interactionRef: React.RefObject<"mouse" | "keyboard" | null>;
  isOpen: boolean;
  itemList: Item[];
  listRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
  onOpen: () => void;
  query: string;
  removeItem: (focusInput?: boolean | undefined) => void;
  resetItems: (focusInput?: boolean | undefined) => void;
  setQuery: Dispatch<SetStateAction<any>>;
  tags: ItemTag[];
  values: Item["value"][];
};

export type AutoCompleteRefMethods =
  | {
      removeItem: (focusInput?: boolean | undefined) => void;
      resetItems: (focusInput?: boolean | undefined) => void;
    }
  | undefined;
