import Link from 'next/link';
import Header from '../comp/Header';

function about() {
    return(
        <div>
            <Header />
            <section className="min-h-screen bg-white dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions.</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">How do I search for internships?</h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    To search for internships, navigate to the homepage and use the search bar. Enter keywords, location, or other relevant details to find internships that match your criteria.
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Can I filter internships based on my field of study?</h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    Yes, you can. After performing a search, use the filters on the search results page to narrow down internships based on your field of study, preferred industry, and other criteria.
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">How do I apply for an internship?</h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    Once you find an internship that interests you, click on the "Apply Now" button to view the application details. Follow the instructions provided by the employer to submit your application.
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Do I need an account to apply for internships?</h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    Yes, you need to create an account on our platform to apply for internships. Having an account allows you to track your applications, save favorite listings, and receive updates on new opportunities.
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Is the service free for students?</h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    Yes, our platform is free for students. There are no charges for searching and applying for internships. We are committed to providing accessible opportunities for students.                    </p>
                </div>
            </div>

            <div>


            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default about;