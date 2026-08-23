import { HiDownload } from 'react-icons/hi';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Footer from '../../components/footer/Footer';
import './ResumeLayout.css';

const RESUME_URL = '/resume/resume.pdf';

const ResumeLayout = () => {
  return (
    <main className="container page">
      <section className="resume-page">
        <div className="resume-head">
          <SectionTitle>Resume</SectionTitle>

          <a className="action-button" href={RESUME_URL} download>
            <HiDownload size={12} /> Download PDF
          </a>
        </div>

        <object className="resume-viewer" data={RESUME_URL} type="application/pdf">
          <p className="resume-fallback">
            Your browser can't display PDFs inline.{' '}
            <a className="resume-fallback-link" href={RESUME_URL} download>
              Download the resume instead
            </a>
            .
          </p>
        </object>
      </section>

      <Footer />
    </main>
  );
};

export default ResumeLayout;
