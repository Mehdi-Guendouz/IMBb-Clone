import Image from "next/image";

const Loading = () => {
    return (
        <div className="flex items-center justify-center">
            <Image className="h-96" src="/spinner.svg" alt="loading...." />
        </div>
    );
}   

export default Loading;
