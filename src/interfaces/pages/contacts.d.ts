declare namespace Contacts {
  export interface useForm {
    formik: FormikProps<any>;
    columns: ColumnsType<Contacts.DataType>;
    data: Contacts.DataType[];
    rowSelection: any
  }

  interface DataType {
    key: string;
    name: string;
    position: string;
    email: string;
    phone: string;
    opportunity: string;
    responsible: string;
    tags: string[];
    avatar?: string;
    isAssigner?: boolean;
  }
}
