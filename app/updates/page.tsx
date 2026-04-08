import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageContainer from '@/components/PageContainer'

export default function Updates() {
    return (
        <>
            <Header />
            <PageContainer>
                <section className="section-spacing">
                    <div className="section-container">
                        <h1 className="heading-1 mb-8">Updates & News</h1>
                        <p className="body-text">This page will showcase news, announcements, and company updates.</p>
                    </div>
                </section>
            </PageContainer>
            <Footer />
        </>
    )
}
