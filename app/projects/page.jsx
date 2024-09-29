"use client";

// imports

import { motion } from "framer-motion";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger, 
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import ProjectSliderBtns from "@/components/ui/ProjectSliderBtns";

const projects = [

    /* 01 british airways */
    {   num: "01",
        title: "British Airways Data Science Internship",
        description: "This project focuses on leveraging data analytics and predictive modeling to uncover crucial business insights and forecast customer buying behavior for British Airways. The objective is to assist the airline in acquiring customers before they embark on their holidays. By applying advanced analytical techniques, the project delivers actionable recommendations, tools, and models that drive informed business decisions and optimize customer acquisition strategies.", 
        source_title: "skytrax (airlinequality.com)", 
        source_link: "https://www.airlinequality.com/", 
        stack: [{name: "Data Science"}, {name: "Machine Learning"}, {name: "Sentiment Analysis"}],
        stack_1: [{name: "Data Manipulation"}, {name: "Web Scraping"}, {name: "BeautifulSoup"}],
        stack_2: [{name: "Python"}, {name: "NLTK"}, {name: "spaCy"}, {name: "NLP"}],
        image: '/assets/work/project_britishairways/project-wallpaper-britishairways.jpg',
        mov:'/assets/work/project_britishairways/wordcloud_animation_white_bg.mov',
        wordcloud_airplane: '/assets/work/project_britishairways/wordcloud_airplane_5000w_outline_transparent.png',
        review_count: [
            {src: '/assets/work/project_britishairways/graphs/year_count_bar.png', caption: "Review Count by Year Bar Chart (1/2)" }, 
            {src: '/assets/work/project_britishairways/graphs/month_count_bar.png', caption: "Review Count by Month Bar Chart (2/2)" },
        ],
        sentiment_scores: [
            {src: '/assets/work/project_britishairways/graphs/scores_trends_line.png', caption: "Sentiment Score Ovver Years Line Chart (1/4)" }, 
            {src: '/assets/work/project_britishairways/graphs/month_scores_bar.png', caption: "Sentiment Score Trends Over Months Grouped Bar Chart (2/4)" },
            {src: '/assets/work/project_britishairways/graphs/scores_bar.png', caption: "Sentiment Score by Count Grouped Bar Chart (3/4)" }, 
            {src: '/assets/work/project_britishairways/graphs/scores_pie.png', caption: "Sentiment Score Distribution Pie Chart (4/4)" }, 
        ],
        status: [
            {src: '/assets/work/project_britishairways/graphs/status_trends_line.png', caption: "Status Trends Over Years Line Chart (1/2)" },
            {src: '/assets/work/project_britishairways/graphs/status_pie.png', caption: "Review Status Pie Chart (2/2)" }, 
        ],
        ml_model: [
            {src: '/assets/work/project_britishairways/graphs/importances.png', caption: "Feature Importances (1/2)" }, 
            {src: '/assets/work/project_britishairways/graphs/matrix.png', caption: "Model Confusion Matrix Heatmap, model struggles to predict True Positive due to lack of customer-centric data (2/2)" },
        ],
        kaggle_1: 'https://www.kaggle.com/code/kienvchung/customer-booking-predictive-model', 
        insights_1: 'https://1drv.ms/p/c/9747102949ee8fa5/EWAe4EGWnDxBhNxY6sthV-EBXM0DrDSuiYwbk2P6IE1RNg?e=Nqrq4k', 
        kaggle_2: 'https://www.kaggle.com/code/kienvchung/british-airways-customer-review-analysis', 
        insights_2: 'https://1drv.ms/p/c/9747102949ee8fa5/EWCjBckZuA9PmZQpGLhbgrQBN6550wceDUJrkdw_JVn-fw?e=mkZsci', 
    },

    /* 02 loanm approval */
    {   num: "02",
        title: "Loan Approval Prediction",
        description: "This project involves developing a machine learning model designed to predict loan approval decisions based on an applicant's financial information. The model is trained on a dataset containing over 4,000 entries using eXtreme Gradient Boosting, ensuring robust and accurate predictions.",
        stack: [{name: "Machine Learning"}, {name: "Classification"}, {name: "scikit-learn"}],
        stack_1: [{name: "GradientBoosting"}, {name: "eXtremeGB"}, {name: "GridSearchCV"}],
        stack_2: [{name: "plotly"}, {name: "streamlit"}, {name: "joblib"}],
        streamlitapp: "https://loan-prediction-model.streamlit.app/", 
        image: '/assets/work/project_loanprediction/project-wallpaper-loanapproval.jpg',
        correlation: '/assets/work/project_loanprediction/graphs/correlation.png',
        confusion_matrix: '/assets/work/project_loanprediction/graphs/model-confusion-matrix.png',
        scores: '/assets/work/project_loanprediction/graphs/model-scores.png',
        kaggle: 'https://www.kaggle.com/code/kienvchung/loan-approval-prediction-eda-ml-model-f1-score-99',
        columns: [
            { src: '/assets/work/project_loanprediction/columns/dependents.png', caption: "Number of dependents (1/12)" },
            { src: '/assets/work/project_loanprediction/columns/education.png', caption: "Education (2/12)" },
            { src: '/assets/work/project_loanprediction/columns/self_employed.png', caption: "Self employment (3/12)" },
            { src: '/assets/work/project_loanprediction/columns/annual_income.png', caption: "Annual income (4/12)" },
            { src: '/assets/work/project_loanprediction/columns/loan_amount.png', caption: "Loan amount (5/12)" },
            { src: '/assets/work/project_loanprediction/columns/loan_term.png', caption: "Loan term in year (6/12)" },
            { src: '/assets/work/project_loanprediction/columns/credit_score.png', caption: "Credit score (Cibil) (7/12)" },
            { src: '/assets/work/project_loanprediction/columns/residential_av.png', caption: "Residential assets value (8/12)" },
            { src: '/assets/work/project_loanprediction/columns/commercial_av.png', caption: "Commercial assets value (9/12)" },
            { src: '/assets/work/project_loanprediction/columns/luxury_av.png', caption: "Luxury assets value (10/12)" },
            { src: '/assets/work/project_loanprediction/columns/bank_av.png', caption: "Bank asset value (11/12)" },
            { src: '/assets/work/project_loanprediction/columns/loan_status.png', caption: "Loan Status (12/12)" },
        ],
        insights: [
            { src: '/assets/work/project_loanprediction/graphs/loan-term-by-loan-status.png', caption: "Loan term by loan status (1/4)" },
            { src: '/assets/work/project_loanprediction/graphs/credit-score-by-loan-status.png', caption: "Credit score by loan status (2/4)" },
            { src: '/assets/work/project_loanprediction/graphs/loan-amount-by-loan-status.png', caption: "Loan amount by loan status (3/4)" }, 
            { src: '/assets/work/project_loanprediction/graphs/annual-income-by-loan-status.png', caption: "Annual Income by loan status (4/4)" }, 
        ],
        relationships: [
            { src: '/assets/work/project_loanprediction/graphs/relationship-annual-income-and-loan-amount.png', caption: "Annual income and loan amount (1/3)" },
            { src: '/assets/work/project_loanprediction/graphs/relationship-assets-and-annual-income.png', caption: "Combined assets and annual income (2/3)" },
            { src: '/assets/work/project_loanprediction/graphs/relationship-assets-and-loan-amount.png', caption: "Combines assets and loan amount (3/3)" },
        ],
        demos: [
            { src: '/assets/work/project_loanprediction/demos/approved-demo.png', caption: "Application approved (1/2)" },
            { src: '/assets/work/project_loanprediction/demos/rejected-demo.png', caption: "Application rejected (2/2)" },
        ],
    },

    /* 03 business intelligence */
    {   num: "03",
        title: "Business Intelligence",
        stack: [{name: "Power BI"}, {name: "Power Query"}, {name: "DAX"}],
        description: "This project aims to analyze the company's sales revenue over the past seven years and assess its market share against competitors. Deliverables include a comprehensive dashboard, detailed reports, and an insightful data model to evaluate internal performance and external market standing.",
        image: '/assets/work/project_bi/project-wallpaper-powerbi.jpg',
        reports: "https://app.powerbi.com/view?r=eyJrIjoiMGQyYTkyMTUtY2RmZS00NTAxLWFlYTgtYWQ1M2U5NDY2ODU1IiwidCI6IjcwNDBmMmI1LWJlNWYtNDQ2Mi05OTFlLTBjNTY4MGRiZTZlNCJ9&pageName=ReportSection",
        mov:'/assets/work/project_bi/sales_revenue.mov',
        dashboard:'/assets/work/project_bi/project-dashboard.png',
        modeling:'/assets/work/project_bi/data_model.png',
        keyTakeaways: [
            { src: '/assets/work/project_bi/keys/initial_state.png', caption: 'Initial Report (1/6)' },
            { src: '/assets/work/project_bi/keys/demand_product.png', caption: 'Most demand product in 2021 (2/6)' },
            { src: '/assets/work/project_bi/keys/performing_product.png', caption: 'Best selling products of all time (3/6)' },
            { src: '/assets/work/project_bi/keys/2021_performance.png', caption: 'Quarterly sales & growth performance in 2021 (4/6)' },
            { src: '/assets/work/project_bi/keys/usa_sales.png', caption: 'USA sales revenue (5/6)' },
            { src: '/assets/work/project_bi/keys/aus_sales.png', caption: 'Australia sales revenue (6/6)' },
        ],
    },

    /* fb tiktok sentiment analysis */
    {   num: "04",
        title: "Sentiment & Textual Analysis",
        description: "This project focuses on analyzing public sentiment regarding the TikTok ban as discussed in FOX News's post on Facebook. It involves scraping data from this post and applying natural language processing techniques to gain insights into public opinion on the issue. Additionally, the project will visualize the frequency of key terms using a WordCloud to reveal prominent themes and sentiments.",
        source_title: "FOX News Post on Facebook",
        source_link: "https://www.facebook.com/FoxNews/posts/pfbid02Q7LLxFmoLsgpQJJHtUKtk5AvqnoLfi9mnWpcy6LGXnokfAc8uDJHHKfJcPBBpjd9l",
        stack: [{name: "Python"}, {name: "Pandas"}, {name: "Matplotlib"}, {name: "NumPy"}, {name: "WordCloud"}],
        stack_1: [{name: "Scikit-learn"}, {name: "PyTorch"}, {name: "Web-scraping"}],
        stack_2: [{name: "Natural Language Processing (NLP)"}],
        stack_3: [{name: "Natural Language Toolkit (nltk)"}],
        image: '/assets/work/project_wordcloud/project-wallpaper-wordcloud.jpg',
        comment_count: '/assets/work/project_wordcloud/comment_count.png',
        activity: '/assets/work/project_wordcloud/activity.png',
        sentiment: '/assets/work/project_wordcloud/sentiment.png',
        wordcloud: '/assets/work/project_wordcloud/wordcloud.png',
        kaggle: 'https://www.kaggle.com/code/kienvchung/textual-data-analysis-tiktokban/notebook',
    },

    /* tiktok claims */
    {   num: "05",
        title: "Tiktok Claims Video Classification Predictive Model",
        description: "(uploading....)", 
        stack: [{name: "Python"}, {name: "Machine Learning"}, {name: "Classification"}],
        image: '/assets/work/project_/',
    },

    /* bikeshare */
    {   num: "06",
        title: "Bike-share Marketing Analysis",
        description: "The marketing analyst team at Cyclistic, a bike-share company in Chicago, aims to convert casual riders into annual members by analyzing how both groups use the service differently. To support this initiative, 12 months of historical trip data will be collected, cleaned, and analyzed. The analysis, visualized using ggplot, will provide insights that inform marketing strategies to maximize annual memberships and drive future growth. These recommendations will be presented to Cyclistic executives for approval.", 
        stack: [{name: "R Programming"}, {name: "RStudio"}, {name: "R Markdown"}],
        rstudio: "/assets/work/project_bikeshare/bikeshare-analysis.html",
        image: '/assets/work/project_bikeshare/project-wallpaper-bikeshare.jpg',
        histograms: [
            { src: '/assets/work/project_bikeshare/number_of_rides.png', caption: "Number of rides by day of the week and rider type (1/2)" },
            { src: '/assets/work/project_bikeshare/average_duration.png', caption: "Average duration by day of the week and rider type (2/2)" },
        ],
        bike_type: '/assets/work/project_bikeshare/bike_type.png',
        trips_by_month: '/assets/work/project_bikeshare/trips_by_month.png',
    },

    /* yelp sql */
    {   num: "07",
        title: "Yelp Business & User Analysis",
        description: "This project consists of a two-part assignment focused on data profiling, analysis, and research. The first part involves answering a series of questions designed to help profile and understand the dataset. The evaluation will consider both the accuracy of findings and the readability of the code used. Proper formatting and comments are expected to make the code easy to follow. The second part requires formulating and answering a research question based on the dataset. The dataset must be prepared for analysis, and the code will again be assessed on clarity and readability. The final deliverable for both parts will be a worksheet containing the answers and SQL code, formatted in a manner that ensures it is clear for peer review.", 
        stack: [{name: "SQLite"}, {name: "RDBMS"}, {name: "Data Modeling"}],
        image: '/assets/work/project_yelp/project-wallpaper-yelp.jpg',
        diagram: '/assets/work/project_yelp/YelpERDiagram.png',
        deliverable: '/assets/work/project_yelp/yelp_sql.txt',
    },

    /* credit card */
    {   num: "08",
        title: "Credit Card Defaults",
        description: "This project involves cleaning and analyzing credit card default data from a credit card company. Key factors such as age, gender, marital status, educational level, and geographic distribution across US states are explored to identify trends and patterns in credit card defaults. The findings are visualized through an interactive Power BI dashboard, offering insights into customer demographics and factors contributing to default rates. The dashboard allows stakeholders to better understand credit risk and tailor strategies for credit card management.", 
        stack: [{name: "Power BI"}, {name: "Excel"}, {name: "Business Intelligence"}],
        image: '/assets/work/project_creditcard/project-wallpaper-creditcard.jpg',
        reports: 'https://app.powerbi.com/view?r=eyJrIjoiODQzZmQzOGYtMzU0Mi00Nzc4LWFhMTItOTY3NzU4MGY1MDQ1IiwidCI6IjcwNDBmMmI1LWJlNWYtNDQ2Mi05OTFlLTBjNTY4MGRiZTZlNCJ9',
        graphs: [
            { src: '/assets/work/project_creditcard/sex.png', caption: "Default Rate by Sex (1/4)" },
            { src: '/assets/work/project_creditcard/age_sex.png', caption: "Default Rate by Age and Sex (2/4)" },
            { src: '/assets/work/project_creditcard/education_sex.png', caption: "Default Rate by Educational Level and Sex (2/4)" },
            { src: '/assets/work/project_creditcard/marital_sex.png', caption: "Default Rate by Marital Status and Sex (2/4)" },
        ],
        default_states: '/assets/work/project_creditcard/default_states.png',
        dashboard: '/assets/work/project_creditcard/dashboard.png',
    },

    /* logistics */
    {   num: "09",
        title: "Logistics Demand and Container Shipping Rate",
        description: "This project involves managing North American logistics operations for a national retailer facing challenges due to port congestion and rising fuel and transportation costs. The task focuses on cleaning, analyzing, and transforming raw datasets into meaningful insights, trends, and patterns. The goal is to optimize the company's importing and distribution processes across the US while ensuring customer demand is met. The results are presented to executives to help guide strategic decision-making and improve overall supply chain efficiency.", 
        stack: [{name: "Tableau"}, {name: "Excel"}, {name: "Logistics"}],
        report1: 'https://public.tableau.com/views/LogisticsDemand/DemandDataDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
        report2: 'https://public.tableau.com/views/LogisticsContainerShippingRatefromStatetoRate/RateDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
        image: '/assets/work/project_logistics/project-wallpaper-logistics.jpg',
        graphs1: [
            { src: '/assets/work/project_logistics/demand_dashboard.png', caption: "Logistics Demand Dashboard (1/2)" },
            { src: '/assets/work/project_logistics/rate_dashboard.png', caption: "Container Shipping Rate Dashboard (2/2)" },
        ],
        graphs2: [
            { src: '/assets/work/project_logistics/weight_heatmap.png', caption: "Total Weight by City/State Heatmap (1/4)" },
            { src: '/assets/work/project_logistics/weight_city_state.png', caption: "Total Weight by City/State Stacked Bar Chart (2/4)" },
            { src: '/assets/work/project_logistics/weight_city.png', caption: "Total Weight by City Bar Chart (3/4)" },
            { src: '/assets/work/project_logistics/weight_state_map.png', caption: "Total Weight by State Geo Map (4/4)" },
        ],
        rate_map: '/assets/work/project_logistics/rate_map.png',
        rate_state: '/assets/work/project_logistics/rate_state.png',
    },

    /* ibm */
    {   num: "10",
        title: "",
        description: "(coming soon)", 
        stack: [{name: ""}, {name: ""}, {name: ""}],
        image: '/assets/work/project_/',
        blank1: '/assets/work/project_/',
    },

    /* loan outliers */
    {   num: "11",
        title: "Loan Data Outlier Detection",
        description: "Outlier detection in datasets is most effectively achieved through visualization. A common statistical method for identifying outliers is the 1.5x IQR (Interquartile Range) rule. This project implements a Python function that applies this rule to detect outliers in a dataset. The outliers are then visually highlighted within the dataframe for easy identification and analysis.",
        stack: [{name: "Python"}, {name: "Pandas"}, {name: "Plotly"} , {name: "NumPy"}],
        image: '/assets/work/project_loanoutliers/project-wallpaper-formatted-data.jpg',
        stats: '/assets/work/project_loanoutliers/statistics.png',
        result: '/assets/work/project_loanoutliers/result-dict.png',
        formatted: '/assets/work/project_loanoutliers/formatted-data.png',
        histograms: [
            { src: '/assets/work/project_loanoutliers/int-rate-hist.png', caption: "Interest rate (1/8)" },
            { src: '/assets/work/project_loanoutliers/installment-hist.png', caption: "Monthly installment amount (2/8)" },
            { src: '/assets/work/project_loanoutliers/log-income-hist.png', caption: "Natural log of self reported income (3/8)" },
            { src: '/assets/work/project_loanoutliers/dti-hist.png', caption: "Debt-to-income ratio (4/8)" },
            { src: '/assets/work/project_loanoutliers/fico-hist.png', caption: "FICO credit score (5/8)" },
            { src: '/assets/work/project_loanoutliers/credit-hist.png', caption: "Number of days the borrower has had a credit line (6/8)" },
            { src: '/assets/work/project_loanoutliers/balance-hist.png', caption: "Borrower's revolving balance (7/8)" },
            { src: '/assets/work/project_loanoutliers/util-hist.png', caption: "Borrower's revolving line utilization rate (8/8)" },
        ],
        kaggle: 'https://www.kaggle.com/code/kienvchung/loan-data-outliers-detection',
    },

];

const totalProjects = projects.length;

const Projects = () => {
    
    {/* Slider */}
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        // get current slide index:
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index:
        setProject(projects[currentIndex]);
    };


    {/* Click zoom Image */}
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomedImageSrc, setZoomedImageSrc] = useState('');
    const handleZoomClick = (imageSrc) => {
        setZoomedImageSrc(imageSrc);
        setIsZoomed(true);
    };
    
    const handleBackgroundClick = (e) => {
        // Check if the clicked element is the background (not the image itself)
        if (e.target === e.currentTarget) {
            setIsZoomed(false);
        }
    };


    return (
        <motion.section 
        initial={{ opacity: 0 }} 
        animate={{
            opacity: 1, 
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }} 
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">

                <div className="flex flex-col xl:gap-[30px]"> {/* xl:flex-row */}

                    {/* PROJECT INFO */}
                    <div className="w-full xl:h-[460px] flex flex-col order-2 w-[85%] mx-auto"> {/* xl:order-none xl:w-[50%] xl:justify-between*/}
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project title */}
                            <h2 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[50px] font-bold leading-none text-primarytext group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title} Project
                            </h2>
                            {/* stack */}
                            <ul className="flex gap-4 transition-all">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-accent text-base lg:text-xl xl:text-xl">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            
                            {/* for projects with stack1 stack2 */}
                            {(project.num === "01" || project.num === "02") && (
                                <>
                                    <ul className="flex gap-4">
                                        {project.stack_1.map((item, index) => {
                                            return (
                                                <li key={index} className="text-accent text-base lg:text-xl xl:text-xl">
                                                    {item.name}
                                                    {/* remove the last comma */}
                                                    {index !== project.stack_1.length - 1 && ","}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <ul className="flex gap-4">
                                        {project.stack_2.map((item, index) => {
                                            return (
                                                <li key={index} className="text-accent text-base lg:text-xl xl:text-xl">
                                                    {item.name}
                                                    {/* remove the last comma */}
                                                    {index !== project.stack_2.length - 1 && ","}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </>
                            )}

                            {/* for projects with stack1 stack2 stack3 */}
                            {(project.num === "04") && (
                                <>
                                    <ul className="flex gap-4">
                                        {project.stack_1.map((item, index) => {
                                            return (
                                                <li key={index} className="text-accent text-base lg:text-xl xl:text-xl">
                                                    {item.name}
                                                    {/* remove the last comma */}
                                                    {index !== project.stack_1.length - 1 && ","}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <ul className="flex gap-4">
                                        {project.stack_2.map((item, index) => {
                                            return (
                                                <li key={index} className="text-accent text-base lg:text-xl xl:text-xl">
                                                    {item.name}
                                                    {/* remove the last comma */}
                                                    {index !== project.stack_2.length - 1 && ","}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <ul className="flex gap-4">
                                        {project.stack_3.map((item, index) => {
                                            return (
                                                <li key={index} className="text-accent text-base lg:text-xl xl:text-xl">
                                                    {item.name}
                                                    {/* remove the last comma */}
                                                    {index !== project.stack_3.length - 1 && ","}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </>
                            )}

                            {/* buttons */}
                            <div className="flex flex-col gap-6">

                                {/* project 01 british airways content */}
                                {(project.num === "01") && (
                                    <>
                                        {/* project description */}
                                        <p className="text-primarytext/60">
                                            {project.description}
                                        </p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* Predictive Machine Learning Model */}                                        
                                        <span className="text-base lg:text-3xl xl:text-3xl">Predictive Machine Learning Model</span>
                                        <div className="pl-12">
                                            {/* project source */}
                                            <p className="text-primarytext/60">
                                                Customer Booking Dataset <br />
                                                Size: 50,000 entries; 14 features
                                            </p>
                                            <br />
                                            {/* power point link button */}
                                            <span className="flex items-center justify-start gap-6">
                                                <span className="text-base lg:text-xl xl:text-xl">PowerPoint A (Insights)</span>
                                                <Link href={project.insights_1} target="_blank" className="flex items-center group transition-all">
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                                <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>PowerPoint</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </Link>
                                            </span>
                                            <br />
                                            {/* kaggle link button */}
                                            <span className="flex items-center justify-start gap-6">
                                                <span className="text-base lg:text-xl xl:text-xl">Kaggle Notebook A (Predictive Model)</span>
                                                <Link href={project.kaggle_1} target="_blank" className="flex items-center group transition-all">
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                                <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>Kaggle Notebook</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </Link>
                                            </span>
                                        </div>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* Comprehensive Data Analysis */}
                                        <span className="text-base lg:text-3xl xl:text-3xl">Comprehensive Data Analysis</span>
                                        <div className="pl-12">
                                            {/* project source */}
                                            <p className="text-primarytext/60">
                                                Web-scraping Data <br />
                                                Source: <Link 
                                                href={project.source_link} 
                                                target="_blank" 
                                                className="underline italic text-accent hover:text-primarytext/60"> 
                                                    {project.source_title}
                                                </Link> <br />
                                                Date collected: 2nd, September, 2024
                                            </p>
                                            <br />
                                            <p className="text-primarytext/60">
                                                From: 9th, October, 2011 <br />
                                                To: 2nd, September, 2024 <br />
                                                Duration: 12 years, and 11 months <br /> 
                                                Size: 3,855 reviews
                                            </p>
                                            <br />
                                            {/* power point link button */}
                                            <span className="flex items-center justify-start gap-6">
                                                <span className="text-base lg:text-xl xl:text-xl">PowerPoint B (Insights)</span>
                                                <Link href={project.insights_2} target="_blank" className="flex items-center group transition-all">
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                                <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>PowerPoint</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </Link>
                                            </span>
                                            <br />
                                            {/* kaggle link button */}
                                            <span className="flex items-center justify-start gap-6">
                                                <span className="text-base lg:text-xl xl:text-xl">Kaggle Notebook B (Comprehensive Analysis)</span>
                                                <Link href={project.kaggle_2} target="_blank" className="flex items-center group transition-all">
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                                <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>Kaggle Notebook</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </Link>
                                            </span>
                                        </div>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* summary */}
                                        <span className="text-base lg:text-3xl xl:text-3xl">Project Summary:</span>

                                        {/* animation */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Wordcloud Animation</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <video width="800" height="400" loop autoPlay muted controls>
                                                <source src={project.mov} type="video/mp4" />
                                            </video>
                                        </span>

                                         {/* wordcloud_airplane */}
                                         <p className="text-base lg:text-2xl xl:text-2xl text-center">Wordcloud Airplane Silhouette</p>
                                        <span className="flex items-center mx-auto mb-10">
                                            <div onClick={() => handleZoomClick(project.wordcloud_airplane)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.wordcloud_airplane} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* Review count */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Review Count by Year & Month</p>
                                        <p className="text-xs lg:text-base xl:text-base italic text-center">(See PowerPoint A for insights)</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.review_count.map((graph, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(graph.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={graph.src} fill quality={100} alt={`Graph ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{graph.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                        {/* Sentiment Scores */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Sentiment Score through various perspectives</p>
                                        <p className="text-xs lg:text-base xl:text-base italic text-center">(See PowerPoint A for insights)</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.sentiment_scores.map((graph, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(graph.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={graph.src} fill quality={100} alt={`Graph ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{graph.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                        {/* Status */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Review Status</p>
                                        <p className="text-xs lg:text-base xl:text-base italic text-center">(See PowerPoint A for insights)</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.status.map((graph, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(graph.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={graph.src} fill quality={100} alt={`Graph ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{graph.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                        {/* ML model */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">ML Model</p>
                                        <p className="text-xs lg:text-base xl:text-base italic text-center">(See PowerPoint B for insights)</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.ml_model.map((graph, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(graph.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={graph.src} fill quality={100} alt={`Graph ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{graph.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>
                                
                                    </>
                                )}

                                {/* project 02 loan approval prediction content */}
                                {(project.num === "02") && (
                                    <>
                                        {/* project description */}
                                        <p className="text-primarytext/60">
                                            {project.description}
                                        </p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* live demo */}
                                        <span className="flex items-center justify-start gap-6">
                                            <span className="text-base lg:text-xl xl:text-xl">Live Demo (Machine Learning Model)</span>
                                            <Link href={project.streamlitapp} target="_blank" className="flex items-center group transition-all">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                            <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>streamlit app</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </span>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* data info */}
                                        <p className="text-primarytext/60">
                                            Loan Approval Dataset <br />
                                            Size: 4,269 entries; 13 features
                                        </p>

                                        {/* kaggle link button */}
                                        <span className="flex items-center justify-start gap-6">
                                            <span className="text-base lg:text-xl xl:text-xl">Kaggle Notebook (Data Analysis)</span>
                                            <Link href={project.kaggle} target="_blank" className="flex items-center group transition-all">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                            <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Kaggle Notebook</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </span>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* summary */}
                                        <span className="text-base lg:text-3xl xl:text-3xl">Project Summary:</span>
 
                                        {/* columns */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Explore features</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.columns.map((column, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(column.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={column.src} fill quality={100} alt={`Feature ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{column.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                        {/* insights */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Insights</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.insights.map((insight, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(insight.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={insight.src} fill quality={100} alt={`Insight ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{insight.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                        {/* relationships */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Relationships</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.relationships.map((relationship, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(relationship.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={relationship.src} fill quality={100} alt={`Relationship ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{relationship.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                        {/* correlation */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Feature Correlation</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.correlation)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.correlation} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* confusion_matrix */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Model Confusion Matrix</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.confusion_matrix)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.confusion_matrix} quality={100} width="800" height="400" />
                                            </div>
                                        </span> 

                                        {/* scores */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">ML Model's Scores</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.scores)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.scores} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* demo screenshots */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Demo Screenshots</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[1320px] mb-12"
                                            >
                                                {project.demos.map((demo, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[1260px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(demo.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={demo.src} fill quality={100} alt={`Demo ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{demo.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                    </>
                                )}

                                {/* project 03 power bi content */}
                                {(project.num === "03") && (
                                    <>
                                        {/* project description */}
                                        <p className="text-primarytext/60">
                                            {project.description}
                                        </p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* reports button */}
                                        <span className="flex items-center justify-start gap-6">
                                            <span className="text-base lg:text-xl xl:text-xl">Interactive Reports with Power BI Web Services:</span>
                                            <Link href={project.reports} target="_blank" className="flex items-center group transition-all">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                            <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Interactive Reports</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </span>
                                        {/*
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div>
                                                <iframe title="reports" src={project.reports} allowFullScreen width="450px" height="225px"></iframe>
                                            </div>
                                        </span>
                                        */}

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* summary */}
                                        <span className="text-base lg:text-3xl xl:text-3xl">Project Summary:</span>

                                        {/* timelapse */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Timelapse of the sales revenue</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <video width="800" height="400" loop autoPlay muted controls>
                                                <source src={project.mov} type="video/mp4" />
                                            </video>
                                        </span>
                                        
                                        {/* key takeaways */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Key Takeaways</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.keyTakeaways.map((takeaway, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(takeaway.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={takeaway.src} fill quality={100} alt={`Key Takeaway ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{takeaway.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                        {/* dashboard */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Snapshot of the dashboard</p>
                                        <p className="text-xs lg:text-base xl:text-base italic text-center">* Interactive dashboard requires a PBI account.</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.dashboard)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.dashboard} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* data model */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Data Model</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.modeling)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.modeling} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        
                                    </>
                                )}

                                {/* project 04 tiktok fb content */}
                                {(project.num === "04") && (
                                    <>
                                        {/* project description */}
                                        <p className="text-primarytext/60">
                                            {project.description}
                                        </p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* project source */}
                                        <p className="text-primarytext/60">
                                            Source: <Link 
                                            href={project.source_link} 
                                            target="_blank" 
                                            className="underline italic text-accent hover:text-primarytext/60"> 
                                                {project.source_title}
                                            </Link>
                                        </p>
                                        <p className="text-primarytext/60">
                                            FOX posted on: 03/13/2024 <br />
                                            Data collected on: 03/22/2024 <br />
                                            Range: 9 days
                                        </p>

                                        {/* data info */}
                                        <p className="text-primarytext/60">
                                            Comments Dataset <br />
                                            Size:  587 entries; 8 features
                                        </p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* kaggle link button */}
                                        <span className="flex items-center justify-start gap-6">
                                            <span className="text-base lg:text-xl xl:text-xl">Kaggle Notebook</span>
                                            <Link href={project.kaggle} target="_blank" className="flex items-center group transition-all">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                            <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Kaggle Notebook</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </span>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* summary */}
                                        <span className="text-base lg:text-3xl xl:text-3xl">Project Summary:</span>

                                        {/* comment count by date */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Comment Count by Date</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.comment_count)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.comment_count} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* comment count by hour/date */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Comment Activity by the Hour</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.activity)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.activity} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* Count of Sentiment Score */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Count of Sentiment Score</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.sentiment)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.sentiment} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* Count of Sentiment Score */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Wordcloud Visualization</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.wordcloud)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.wordcloud} quality={100} width="800" height="400" />
                                            </div>
                                        </span>
                                    </>
                                )}

                                {/* project (05) content */}
                                {(project.num === "05") && (
                                    <>
                                        {/* project description */}
                                        <p className="text-primarytext/60">{project.description}</p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* summary */}
                                        <span className="text-base lg:text-3xl xl:text-3xl">Project Summary:</span>

                                    </>
                                )}

                                {/* project 06 bike-share content */}
                                {(project.num === "06") && (
                                    <>
                                        {/* project description */}
                                        <p className="text-primarytext/60">{project.description}</p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* data info */}
                                        <p className="text-primarytext/60">
                                            Date: December 2021 to November 2022 <br />
                                            Range: 12 months
                                        </p>

                                        <p className="text-primarytext/60">
                                            Bike Trip Dataset <br />
                                            Size:  5,733,451 entries; 13 features
                                        </p>

                                        {/* Rstudio link button */}
                                        <span className="flex items-center justify-start gap-6">
                                            <span className="text-base lg:text-xl xl:text-xl">RStudio Notebook</span>
                                            <Link href={project.rstudio} target="_blank" className="flex items-center group transition-all">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                            <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>RStudio Notebook</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </span>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        <span className="text-base lg:text-3xl xl:text-3xl">Key Findings</span>
                                        <ul className="list-disc ml-5">
                                            <li>Member riders complete about 75% more rides compared to casual riders during the week.</li>
                                            <li>Member riders' average duration stays consistent throughout weekdays and has slight bump on the weekend.</li>
                                            <li>The main reason for riders to sign up for annual membership is for commuting to work.</li>
                                            <li>Casual riders' average duration is significantly higher than trips done by member riders in any day of the week.</li>
                                            <li>Casual riders has shorter average duration during weekdays and longer average duration on the weekend.</li>
                                            <li>Casual riders also complete more rides on the weekend compared to weekdays.</li>
                                            <li>Casual riders are 35% more likely to ride an electric bike than a classic bike.</li>
                                            <li>Member riders' bike choice is 50/50 between classic and electric bike.</li>
                                            <li>The number of rides in July is at least 8x more compared to the number of rides in January. <br />
                                                (In Chicago, July is the hottest month, and January is the coldest month according to Google)
                                            </li>
                                        </ul>

                                        <span className="text-base lg:text-3xl xl:text-3xl">Conclusion</span>
                                        <ul className="list-disc ml-5">
                                            <li>Member riders have high and consistent number of rides as well as consistent average duration from Monday to Friday, meaning that they use the bikes to commute to work daily, and decide to sign up for the annual membership in order to save money in the long run.</li>
                                            <li>Casual riders are most likely tourists/visitors, and new customers. Their average duration is shorter in the middle of the week and longer on the weekend, and they complete more rides on the weekend. Therefore, they tend to use the bikes for leisure purposes and weekend rides.</li>
                                            <li>The bike-sharing program tends to become busier during warmer weather, and the opposite occurs during colder weather.</li>
                                            <li>Casual riders prefer electric bikes over classic bikes.</li>
                                        </ul>

                                        <span className="text-base lg:text-3xl xl:text-3xl">Recommendation</span>
                                        <ul className="list-disc ml-5">
                                            <li>Because the majority of casual riders are tourists/visitors, we want to target only the small group of casual riders that are local to the city in order to maximize the profits. Therefore, we should introduce a membership tier at a lower price point compared to the more premium annual membership. This new membership tier is for the locals that don't need this bike-share program for commuting to work. But it still allows new customers to enjoy the program on the weekend at a more afforadable price point.</li>
                                            <li>Implement a limited-time promotion for customers who sign up for the membership for the first time. The promotion can either be "30 day free trial", or "half-price off 1st month", depending on the company's budget. The purpose of these promotions is to introduce the benefits, convienence, and potential savings to new members.</li>
                                            <li>Add more electric bikes into the existing fleet to meet the casual riders' demand.</li>
                                        </ul>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* summary */}
                                        <span className="text-base lg:text-3xl xl:text-3xl">Project Summary:</span>

                                        {/* histograms */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Activities by day of the week</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.histograms.map((histogram, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(histogram.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={histogram.src} fill quality={100} alt={`Histogram ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{histogram.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Number of trip records by month</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.trips_by_month)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.trips_by_month} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Number of rides by rider and bike type</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.bike_type)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.bike_type} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                    </>
                                )}

                                {/* project 07 yelp sql content */}
                                {(project.num === "07") && (
                                    <>
                                        {/* project description */}
                                        <p className="text-primarytext/60">{project.description}</p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* Deliverable link button */}
                                        <span className="flex items-center justify-start gap-6">
                                            <span className="text-base lg:text-xl xl:text-xl">Deliverable Text File</span>
                                            <Link href={project.deliverable} target="_blank" className="flex items-center group transition-all">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                            <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Deliverable Text File</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </span>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* diagram */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Entity-Relationship (ER) Diagram</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.diagram)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.diagram} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                    </>
                                )}

                                {/* project 08 credit card content */}
                                {(project.num === "08") && (
                                    <>
                                        {/* project description */}
                                        <p className="text-primarytext/60">{project.description}</p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* data info */}
                                        <p className="text-primarytext/60">
                                            Credit Card Defaults Dataset <br />
                                            Size: 30,002 entries; 26 features
                                        </p>

                                        {/* reports button */}
                                        <span className="flex items-center justify-start gap-6">
                                            <span className="text-base lg:text-xl xl:text-xl">Interactive Reports with Power BI Web Services:</span>
                                            <Link href={project.reports} target="_blank" className="flex items-center group transition-all">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                            <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Interactive Reports</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </span>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* summary */}
                                        <span className="text-base lg:text-3xl xl:text-3xl">Project Summary:</span>

                                        {/* snapshot */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Snapshot of the report</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.dashboard)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.dashboard} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* graphs */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Activities by day of the week</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.graphs.map((graph, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(graph.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={graph.src} fill quality={100} alt={`Histogram ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{graph.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                        {/* default by state */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Default Rate by State</p>
                                        <p className="text-xs lg:text-base xl:text-base italic text-center">* Higher default rate equals darker color</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.default_states)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.default_states} quality={100} width="800" height="400" />
                                            </div>
                                        </span>
                                    </>
                                )}

                                {/* project (09) content */}
                                {(project.num === "09") && (
                                    <>
                                        {/* project description */}
                                        <p className="text-primarytext/60">{project.description}</p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* data info */}
                                        <p className="text-primarytext/60">
                                            Logistics Demand Dataset <br />
                                            Size: 1,262 entries; 8 features
                                        </p>

                                        {/* Dashboard button */}
                                        <span className="flex items-center justify-start gap-6">
                                            <span className="text-base lg:text-xl xl:text-xl">Interactive Dashboard with Tableau Public:</span>
                                            <Link href={project.report1} target="_blank" className="flex items-center group transition-all">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                            <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Interactive Dashboard</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </span>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* data info */}
                                        <p className="text-primarytext/60">
                                            Container Shipping Rate Dataset <br />
                                            Size: 623,808 entries; 8 features
                                        </p>

                                        {/* Dashboard button */}
                                        <span className="flex items-center justify-start gap-6">
                                            <span className="text-base lg:text-xl xl:text-xl">Interactive Dashboard with Tableau Public:</span>
                                            <Link href={project.report2} target="_blank" className="flex items-center group transition-all">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                            <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Interactive Dashboard</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </span>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* summary */}
                                        <span className="text-base lg:text-3xl xl:text-3xl">Project Summary:</span>

                                        {/* graphs1 */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Snapshots of the dashboard</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.graphs1.map((graph, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(graph.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={graph.src} fill quality={100} alt={`Histogram ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{graph.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                        {/* rate map */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">AVG Rate from California to other States</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.rate_map)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.rate_map} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* rate state */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">AVG Rate from State to State Heatmap</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.rate_state)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.rate_state} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* graphs2 */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Total Weight by City/State through Various Perspectives</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.graphs2.map((graph, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(graph.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={graph.src} fill quality={100} alt={`Histogram ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{graph.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                    </>
                                )}

                                {/* project (10) content */}
                                {(project.num === "10") && (
                                    <>
                                        {/* project description */}
                                        <p className="text-primarytext/60">{project.description}</p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* summary */}
                                        <span className="text-base lg:text-3xl xl:text-3xl">Project Summary:</span>

                                    </>
                                )}

                                {/* project 11 loan outliers content */}
                                {(project.num === "11") && (
                                    <>
                                        {/* project description */}
                                        <p className="text-primarytext/60">
                                            {project.description}
                                        </p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* data info */}
                                        <p className="text-primarytext/60">
                                            Loan Dataset <br />
                                            Size: 9578 entries, 8 columns
                                        </p>
                                        <p className="text-primarytext/60">
                                        Metadata:
                                            <ul className="list-disc ml-5">
                                                <li>int.rate: The interest rate of the loan, as a proportion</li>
                                                <li>installment: The monthly installments owed by the borrower if the loan is funded</li>
                                                <li>log.annual.inc: The natural log of the self-reported annual income of the borrower</li>
                                                <li>dti: The debt-to-income ratio of the borrower</li>
                                                <li>fico: The FICO credit score of the borrower</li>
                                                <li>days.with.cr.line: The number of days the borrower has had a credit line</li>
                                                <li>revol.bal: The borrower’s revolving balance</li>
                                                <li>revol.util: The borrower’s revolving line utilization rate</li>
                                            </ul>
                                        </p>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* kaggle link button */}
                                        <span className="flex items-center justify-start gap-6">
                                            <span className="text-base lg:text-xl xl:text-xl">Kaggle Notebook</span>
                                            <Link href={project.kaggle} target="_blank" className="flex items-center group transition-all">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-primarytext/10 flex justify-center items-center group duration-500 hover:rotate-45">
                                                            <BsArrowUpRight className="text-primarytext text-xl group-hover:text-accent transition-all" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Kaggle Notebook</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </Link>
                                        </span>

                                        {/* border */}
                                        <div className="border border-primarytext/50 my-6"></div>

                                        {/* summary */}
                                        <span className="text-base lg:text-3xl xl:text-3xl">Project Summary:</span>
 
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Data Statistics</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.stats)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.stats} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* histograms */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Histograms</p>
                                        <div className="w-full sm:w-full md:w-full lg:w-[86%] xl:w-[70%] mx-auto">
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={1}
                                                className="h-[520px] mb-12"
                                            >
                                                {project.histograms.map((histogram, index) => {
                                                    return (
                                                        <SwiperSlide key={index} className="w-full">
                                                            <div className="h-[460px] relative group flex flex-col justify-center items-center bg-accent/20" onClick={() => handleZoomClick(histogram.src)} style={{ cursor: 'pointer' }}>
                                                                {/* overlay */}
                                                                <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                                                
                                                                {/* image */}
                                                                <div className="relative w-full h-full">
                                                                    <Image src={histogram.src} fill quality={100} alt={`Histogram ${index + 1}`} />
                                                                </div>
                                                            </div>
                                                            {/* caption */}
                                                            <p className="absolute bottom-2 text-primarytext text-xs md:text-lg z-20">{histogram.caption}</p> 
                                                        </SwiperSlide>
                                                    );
                                                })}

                                                {/* slider buttons */}
                                                <ProjectSliderBtns 
                                                    containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none" 
                                                    btnStyles="bg-primary hover:bg-accent text-accent hover:text-primary text-[28px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                                />
                                            </Swiper>
                                        </div>

                                        {/* dict */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Inter Quartile Range and Low/High Threshold Dictionary</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.result)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.result} quality={100} width="800" height="400" />
                                            </div>
                                        </span>

                                        {/* formatted data */}
                                        <p className="text-base lg:text-2xl xl:text-2xl text-center">Snapshot of formatted outlier data</p>
                                        <span className="flex items-center mx-auto mb-10 border border-accent border-4">
                                            <div onClick={() => handleZoomClick(project.formatted)} style={{ cursor: 'pointer' }}>
                                                <Image src={project.formatted} quality={100} width="800" height="400" />
                                            </div>
                                        </span>
                                    </>
                                )}

                                {/* Click to zoom image */}
                                {isZoomed && (
                                    <div 
                                        style={{
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.92)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        zIndex: 1000,
                                        }} 
                                        onClick={() => setIsZoomed(false)}
                                    >
                                        <div onClick={() => setIsZoomed(false)} style={{ cursor: 'pointer' }}>
                                            <Image src={zoomedImageSrc} quality={100} width={1500} height={500} />
                                        </div>
                                    </div>
                                )}

                                {/* github project button 
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-primarytext/5 flex justify-center items-center group">
                                                <BsGithub className="text-primarytext text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                */}

                            </div>
                        </div>
                    </div>

                    {/* PROJECT SLIDER */}
                    <div className="w-full mx-auto order-1"> {/* w-full xl:w-[50%] */}
                        <Swiper 
                        spaceBetween={30} 
                        slidesPewView={1} 
                        className="h-[280px] md:h-[360px] lg:h-[440px] xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                        >
                        {/* original className for Swiper */}
                        {/* xl:h-[520px] mb-12 */}
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide 
                                    key={index} 
                                    className="w-full"
                                    >
                                        <div className="h-[220px] md:h-[300px] lg:h-[380px] xl:h-[460px] relative group flex justify-center items-center bg-accent/20">
                                            
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                                            
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill quality={100} className="object-contain" alt="project thumbnail" />
                                            </div>

                                        </div>
                                        <div className="mt-6">
                                            <p className="text-center text-primarytext/60 text-lg md:text-lg lg:text-xl xl:text-xl z-20">{project.num}/{totalProjects}</p> 
                                        </div>
                                        
                                    </SwiperSlide>
                                );
                            })}

                            {/* slider buttons */}
                            <ProjectSliderBtns 
                            containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full w-max justify-none xl:bottom-0 xl:w-max xl:justify-none"   
                            btnStyles="bg-accent hover:bg-primary text-primary hover:text-accent text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                            {/* original className for ProjectSlidierBtns */}
                            {/*  flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none  */}
                        </Swiper>
                    </div>

                </div>

            </div>
        </motion.section>
        
    );
};

export default Projects;

