import React from 'react';

const About = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold">rateMovie - minified version of IMDB</h2>
                        <p className="dark:text-gray-400">this website let users create two type of accounts. (fan/admin). different roles of people can perform different action. I'd suggest you two create both admin and fan type account. </p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                    <p>This Website is created following MERN stack. For frontend React + Tailwind. For backend Express + mongodb, for authentication Firebase & imgbb for image hosting.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Safwan Bin Ridwan</p>
                                            <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                    <p>The website is basically a minified version of imdb</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                    <p>postea verear persecuti. Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris efficiantur, commune explicari et eos. Case movet ad est, sed tota vocent appetere ea.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                    <p>eis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;