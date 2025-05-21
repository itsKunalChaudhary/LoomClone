import Image from "next/image";

const FileInput = ({ id, label, accept, file, onChange, previewUrl, inputRef, onReset, type}: FileInputProps) => {

    return (
        <section className={"file-input"}>
            <label htmlFor={id}>{label}</label>

            <input
                type={"file"}
                id={id}
                ref={inputRef}
                accept={accept}
                hidden
                onChange={onChange}
            />
            {!previewUrl ? (
                <figure onClick={() => inputRef.current?.click()}>
                    <Image src={"/assets/icons/upload.svg"} alt={"Upload Icon"} width={24} height={24} />
                    <p>Click to upload your {id}</p>
                </figure>
            ) : (
                <div>
                    {type === 'video'
                        ? <video src={previewUrl} controls/>
                        : <Image src={previewUrl} alt={"Image"} fill/>
                    }
                    <button type="button" onClick={onReset}>
                        <Image src={"/assets/icons/close.svg"} alt={"Close Icon"} width={16} height={16} />
                     </button>
                    <p>{file?.name}</p>
                </div>
            )}
        </section>
    )
}
export default FileInput
