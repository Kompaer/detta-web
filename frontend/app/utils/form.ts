export interface Form {
  id: string;
  publisher_id: string;
  name: string;
  active: boolean;
  store_on_disk: boolean;
  send_response: boolean;
  reciever_mail: string;
  fields: FormField[];
  uses: FormUse[];
  publisher_form?: PublisherForm;
}

export interface PublisherForm {
  id: string;
  publisher_id: string;
}

export interface BaseFieldProps {
  defaultValue?: any;
  placeholder?: string;
  placeholder_key?: string;
}

export interface TextFieldProps extends BaseFieldProps {
  minLength?: number;
  maxLength?: number;
}

export interface NumberFieldProps extends BaseFieldProps {
  min?: number;
  max?: number;
  step?: number;
}

export interface ChoiceOption {
  label: string;
  label_key?: string;
  value: string;
  default?: boolean;
}

export interface ChoiceFieldProps extends BaseFieldProps {
  options?: ChoiceOption[];
  allowOther?: boolean;
  allowMultiple?: boolean;
}

export type FieldProperties =
  | TextFieldProps
  | NumberFieldProps
  | ChoiceFieldProps
  | Record<string, any>;

export interface LogicRule {
  action: "SHOW" | "HIDE";
  when: {
    fieldId: string;
    operator: "equals" | "not_equals" | "greater_than" | "contains";
    value: any;
  };
}

export interface FormField {
  id: string;
  index: number;
  form: Form;
  type: FormFieldType;
  active: boolean;
  title: string;
  title_key: string;
  description: string;
  description_key: string;
  placeholder: string;
  placeholder_key: string;
  options: FormOption[];
  required: boolean;
  properties: FieldProperties;
}

export interface FormOption {
  id: string;
  index: number;
  field: FormField;
  type: FormOptionType;
  title: string;
  title_key: string;
  active: boolean;
}

export enum FormFieldType {
  TEXT = "text",
  SHORT_TEXT = "short_text",
  EMAIL = "email",
  PHONE = "phone",
  NUMBER = "number",
  DROPDOWN = "dropdown",
  BUTTONS = "buttons",
  URL = "url",
  BOOLEAN = "boolean",

  //Non Inputs
  NI_HEADING = "ni_heading",
  NI_TEXTBLOCK = "ni_textblock",
  NI_IMAGE = "ni_image",
  NI_VIDEO = "ni_video",
}

export enum FormOptionType {
  STRING = "string",
  NUMBER = "number",
}

export interface FormUse {
  id: string;
  use_type: string;
  user_id: string;
  reference_id?: string;
  public: boolean;
  form?: Form;
  created_at: Date;
}
