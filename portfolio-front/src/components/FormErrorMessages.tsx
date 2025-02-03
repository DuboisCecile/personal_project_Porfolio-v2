import { ErrorMessage } from '@hookform/error-message';

export default function FormErrorMessages({ errors }: { errors: unknown }) {
    if (!errors || Object.keys(errors).length === 0) return null;

    return (
        <div className='mr-5 text-red-500'>
            {Object.keys(errors).map((fieldName) => (
                <ErrorMessage
                    errors={errors}
                    name={fieldName}
                    key={fieldName}
                    render={({ message }) => <p>{message}</p>}
                />
            ))}
        </div>
    );
}
