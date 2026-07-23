import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import "./Services.scss";

import dataAnalyticsImg from "../../assets/services/data-analytics-real.png";
import biImg from "../../assets/services/business-intelligence-real.png";
import dataEngineeringImg from "../../assets/services/data-engineering-real.png";
import dataScienceImg from "../../assets/services/data-science-real.png";
import palantirImg from "../../assets/services/palantir.png";
import dataGovernanceImg from "../../assets/services/data-governance-real.png";
import powerbiLogo from "../../assets/images/powerbi_logo.png";
import tableauLogo from "../../assets/images/tableau_logo.jpg";
import palantirLogo from "../../assets/images/palantir_logo.png";
import dataBricksLogo from "../../assets/images/databricks_logo.png";
import snowflakeLogo from "../../assets/images/snowflake_logo.png";
import denodoLogo from "../../assets/images/denodo_logo.png";
import airflowLogo from "../../assets/images/airflow_logo.png";
import mlflowLogo from "../../assets/images/mlflow_logo.png";
import teamcityLogo from "../../assets/images/teamcity_logo.png";
import pythonLogo from "../../assets/images/python_logo.png";
import sqlLogo from "../../assets/images/sql_logo.png";
import pysparkLogo from "../../assets/images/apachespark_logo.png";
import typescriptLogo from "../../assets/images/typescript_logo.png";

export default function Services() {
    const trans = useTranslation();
    const t = trans.services;
    const toolsTransl = trans.tools;

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeToolCategory, setActiveToolCategory] = useState("Analytics & BI");

    const servicesData = [
        {
            title: t.items[0].title,
            description: t.items[0].description,
            image: dataAnalyticsImg
        },
        {
            title: t.items[1].title,
            description: t.items[1].description,
            image: biImg
        },
        {
            title: t.items[2].title,
            description: t.items[2].description,
            image: dataEngineeringImg
        },
        {
            title: t.items[3].title,
            description: t.items[3].description,
            image: dataScienceImg
        },
        {
            title: t.items[5].title,
            description: t.items[5].description,
            image: dataGovernanceImg
        },
    ];

    const toolsCategories = {
        [toolsTransl.categories.analyticsBI]: [
            { name: "Power BI", logo: powerbiLogo, desc: toolsTransl.items["Power BI"] },
            { name: "Tableau", logo: tableauLogo, desc: toolsTransl.items["Tableau"] },
            { name: "Palantir", logo: palantirLogo, desc: toolsTransl.items["Palantir_desc"] }
        ],
        [toolsTransl.categories.dataEngineering]: [
            { name: "DataBricks", logo: dataBricksLogo, desc: toolsTransl.items["DataBricks"] },
            { name: "Snowflake", logo: snowflakeLogo, desc: toolsTransl.items["Snowflake"] },
            { name: "Denodo", logo: denodoLogo, desc: toolsTransl.items["Denodo"] }
        ],
        [toolsTransl.categories.productionWorkflow]: [
            { name: "Airflow", logo: airflowLogo, desc: toolsTransl.items["Airflow"] },
            { name: "MLflow", logo: mlflowLogo, desc: toolsTransl.items["MLflow"] },
            { name: "TeamCity", logo: teamcityLogo, desc: toolsTransl.items["TeamCity"] }
        ],
        [toolsTransl.categories.languagesTools]: [
            { name: "Python", logo: pythonLogo, desc: toolsTransl.items["Python"] },
            { name: "SQL", logo: sqlLogo, desc: toolsTransl.items["SQL"] },
            { name: "PySpark", logo: pysparkLogo, desc: toolsTransl.items["PySpark"] },
            { name: "TypeScript", logo: typescriptLogo, desc: toolsTransl.items["TypeScript"] },
        ]
    };

    // Fix active tool category if language changes
    useEffect(() => {
        const categories = Object.keys(toolsCategories);
        if (!categories.includes(activeToolCategory)) {
            setActiveToolCategory(categories[0]);
        }
    }, [trans]);

    return (
        <section id="services" className="services-section">
            {/* Background sphere effect to match theme */}
            <div className="services-background" />

            <div className="services-container">
                <h2>{t.title}</h2>

                <div className="services-content">
                    <div className="services-accordion">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                className={`accordion-item ${activeIndex === index ? "active" : ""}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="accordion-header">
                                    <h3>{service.title}</h3>
                                    <span className="icon-wrapper">
                                        {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </div>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="accordion-content"
                                        >
                                            <p>{service.description}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {activeIndex === index && (
                                    <motion.div
                                        className="active-border"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 4.5, ease: "easeOut" }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="services-image-container">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeIndex}
                                src={servicesData[activeIndex].image}
                                alt={servicesData[activeIndex].title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="service-image"
                            />
                        </AnimatePresence>
                    </div>
                </div>

                {/* Tools Ecosystem Section */}
                <div className="tools-full-width-container">
                    {/* Title removed per user request */}
                    <div className="tools-nav">
                        {Object.keys(toolsCategories).map((category) => (
                            <button
                                key={category}
                                className={`tool-nav-btn ${activeToolCategory === category ? "active" : ""}`}
                                onClick={() => setActiveToolCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="tools-display">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeToolCategory}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="tools-grid"
                            >
                                {toolsCategories[activeToolCategory].map((tool, idx) => (
                                    <div key={idx} className="tool-card">
                                        {tool.logo ? (
                                            <img
                                                src={tool.logo}
                                                alt={`${tool.name} logo`}
                                                className="tool-logo"
                                            />
                                        ) : (
                                            <div className="tool-icon-placeholder">
                                                {tool.name.substring(0, 2).toUpperCase()}
                                            </div>
                                        )}
                                        <div className="tool-info">
                                            <h4>{tool.name}</h4>
                                            <p>{tool.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
