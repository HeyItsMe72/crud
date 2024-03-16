import { useForm } from "../hooks/useForm";

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: ""
}

const validationForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    let regexSubject = /^.{1,50}$/;

    //Validations
    if(!form.name.trim()){
        errors.name = "The name is required."; 
    } else if (!regexName.test(form.name.trim())){
        errors.name = "The name field only accept words and white spaces."
    }

    if(!form.email.trim()){
        errors.email = "The email is required."; 
    } else if (!regexEmail.test(form.email.trim())){
        errors.email = "Please use a valid email."
    }

    if(!form.subject.trim()){
        errors.subject = "The subject is required."; 
    } else if (!regexSubject.test(form.subject.trim())){
        errors.subject = "The subject field only accept 50 characteres."
    }

    if(!form.comments.trim()){
        errors.comments = "The comments is required."; 
    } else if (!regexComments.test(form.comments.trim())){
        errors.comments = "The comments field only accept 250 characteres."
    }

    return errors;
}

const ContactForm = () => {
    const {
        form, errors, loading, response, handleBlur, handleChange, handleSubmit
    } = useForm(initialForm, validationForm);


    return ( 
        <div>
            <h2>Validations Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={form.name} 
                placeholder="Name" onBlur={handleBlur} onChange={handleChange} required />
                {errors.name && <p>{errors.name}</p>}
                <input type="email" name="email" value={form.email} 
                placeholder="youremail@example.com" onChange={handleChange} onBlur={handleBlur} required />
                {errors.email && <p>{errors.email}</p>}
                <input type="text" name="subject" value={form.subject} 
                placeholder="Subject" onChange={handleChange} onBlur={handleBlur} required />
                {errors.subject && <p>{errors.subject}</p>}
                <textarea name="comments" cols="30" rows="5" value={form.comments} 
                placeholder="Write your comments" onChange={handleChange} onBlur={handleBlur} required ></textarea>
                {errors.comments && <p>{errors.comments}</p>}
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}
 
export default ContactForm;