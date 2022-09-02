import { ErrorMessage, useField } from "formik";
const TextField = ({ label, id, name, ...props }) => {
  const [field] = useField(name);
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize text-white" htmlFor={id}>
        {id.split("-").join(" ")}:
      </label>
      <textarea id={id} name={name} {...props} {...field} />
      <ErrorMessage name={name} />
    </div>
  );
};

export default TextField;
