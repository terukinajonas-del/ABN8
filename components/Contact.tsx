
import React, { useState } from 'react';

interface FormState {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const Contact: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formState.name.trim()) {
            newErrors.name = 'Nome é obrigatório.';
        }
        if (!formState.email.trim()) {
            newErrors.email = 'E-mail é obrigatório.';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = 'Formato de e-mail inválido.';
        }
        if (!formState.message.trim()) {
            newErrors.message = 'Mensagem é obrigatória.';
        }
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setShowModal(true);
                setFormState({ name: '', email: '', message: '' });
            }, 1500);
        }
    };
    
    return (
        <section id="contact" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Fale Conosco</h2>
                    <p className="mt-4 text-lg leading-6 text-gray-400">
                        Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
                    </p>
                </div>
                <div className="mt-12">
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid grid-cols-1 gap-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Nome completo</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formState.name}
                                onChange={handleChange}
                                autoComplete="name"
                                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 text-gray-200 bg-slate-800 border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="Nome completo"
                            />
                            {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">E-mail</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                                autoComplete="email"
                                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 text-gray-200 bg-slate-800 border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="E-mail"
                            />
                            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formState.message}
                                onChange={handleChange}
                                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 text-gray-200 bg-slate-800 border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="Mensagem"
                            ></textarea>
                            {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-slate-900 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-slate-800 rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
                        <h3 className="text-xl font-bold text-white mb-4">Mensagem Enviada!</h3>
                        <p className="text-gray-300 mb-6">Obrigado por entrar em contato. Retornaremos em breve.</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="px-6 py-2 bg-amber-500 text-slate-900 font-bold rounded-md hover:bg-amber-400"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
