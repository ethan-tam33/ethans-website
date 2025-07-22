import vancouver from '@/public/vancouver.png';
import Image from 'next/image';

export default function Blog() {
    return (
         <section id="home" className="animate-fadeIn animation-delay-2 selection:bg-blue-100 dark:selection:bg-blue-500 pt-12">
            <div className="flex flex-col text-center items-center justify-center my-6 py-10 sm:py-20 md:py-20 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-0 md:w-3/5 animate-fadeIn animation-delay-4">
                    <h1 className="font-sans text-3xl font-bold mt-4 md:mt-0 md:text-5xl pb-4">
                        Blog
                    </h1>

                    <figure className="my-6 font-mono">
                        <p className="text-lg">Coming soon!</p>

                        <Image
                            src={vancouver}
                            alt="Vancouver"
                            className="rounded-lg mt-4"
                            width={600}
                            height={400}
                        />
                        <figcaption className="text-center text-sm mt-2">
                            Prospect Point Lookout in Vancouver, Canada.
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}