import  React  from  "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FORM from '../components/contactUs.js'

const  ContactPage  =  ()  => (
    <Layout>
        <SEO title="Contact" />
        <div
            style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
            }}
        >
            <section className="page-section bg-light" style={{
                    padding: `0 1.0875rem 1.45rem`,
                    minHeight: '530px'
                }}>
                <h1 className="text-center uppercase">Contact</h1>
                    <FORM></FORM>
               
            </section>

        </div>
        
    </Layout>
)


export  default  ContactPage