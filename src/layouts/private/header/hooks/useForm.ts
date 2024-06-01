import { useFormik } from 'formik';

import { Login } from 'src/interfaces/pages/login';

const useFormHeader = (): Login.useForm => {
  const initialValues = {
    search: '',
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: async value => {},
  });

  return { formik };
};

export default useFormHeader;
