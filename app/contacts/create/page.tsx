import CreateContactForm from "@/components/create-form";

const CreateContact = () => {
  return (
    <div className=" max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New Contact</h1>
      <CreateContactForm />
    </div>
  );
};

export default CreateContact;
