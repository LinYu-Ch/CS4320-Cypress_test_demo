import ButtonTestComponent from '../components/ButtonTestComponent';
import FormTestComponent from '../components/FormTestComponent';
import RedirectTestComponent from '../components/RedirectTestComponent';
import ComponentLoadTestComponent from '../components/ComponentLoadTestComponent';
import APICallTestComponent from '../components/APICallTestComponent';

const HomeComponentTest = () => {
    return (
        <>
            <header>
                <h1>Cypress Testing Framework Demo</h1>
            </header>
            <section id="section-1">
                <h2>Button Test</h2>
                <ButtonTestComponent testType="correct" />
                <ButtonTestComponent testType="error" />
            </section>
            <section id="section-2">
                <h2>Form Test</h2>
                <FormTestComponent testType="correct" />
                <FormTestComponent testType="error" />
            </section>
            <section id="section-3">
                <h2>Redirect Test</h2>
                <RedirectTestComponent testType="correct" />
                <RedirectTestComponent testType="error" />
            </section>
            <section id="section-4">
                <h2>Component Load Test</h2>
                <ComponentLoadTestComponent testType="correct" />
                <ComponentLoadTestComponent testType="error" />
            </section>
            <section id="section-5">
                <h2>API Call Test</h2>
                <APICallTestComponent testType="correct" />
                <APICallTestComponent testType="error" />
            </section>
        </>
    );
};

export default HomeComponentTest;
