import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
    name: string
    email: string
    phone?: string
    company?: string
    service: string
    message: string
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json()

        // Validation
        if (!body.name || !body.email || !body.message || !body.service) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Missing required fields: name, email, service, and message are required.',
                },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { success: false, error: 'Invalid email format' },
                { status: 400 }
            )
        }

        const recipientEmail = process.env.CONTACT_FORM_EMAIL || 'iamhabibabiola@gmail.com'

        // Email to business
        const businessEmailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
                <h2 style="color: #001BB7;">New Contact Form Submission</h2>
                
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Name:</strong> ${body.name}</p>
                    <p><strong>Email:</strong> ${body.email}</p>
                    ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
                    ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
                    <p><strong>Service Interest:</strong> ${body.service}</p>
                </div>
                
                <div style="margin: 20px 0;">
                    <h3 style="color: #333;">Message:</h3>
                    <p style="white-space: pre-wrap; line-height: 1.6;">${body.message}</p>
                </div>
                
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
                <p style="color: #666; font-size: 12px;">
                    This is an automated email from SAF-AGA Renewable Energy website contact form.
                </p>
            </div>
        `

        // Email to user
        const userEmailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
                <h2 style="color: #001BB7;">Thank You for Contacting SAF-AGA Renewable Energy</h2>
                
                <p>Dear ${body.name},</p>
                
                <p>Thank you for reaching out to us. We have received your inquiry regarding <strong>${body.service}</strong> and will review it shortly.</p>
                
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #333;">Your Message Summary:</h3>
                    <p style="white-space: pre-wrap; line-height: 1.6;">${body.message}</p>
                </div>
                
                <p>We typically respond to inquiries within 4 hours during business hours (Monday - Friday, 9am - 6pm WAT). If you don't hear from us within 24 hours, please reach out directly at +234 (0)8036048403.</p>
                
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
                
                <h3 style="color: #001BB7;">SAF-AGA Renewable Energy</h3>
                <p>
                    📍 Abuja – North Central Hub<br />
                    12 Algiers Street, Wuse Zone 5, Abuja Nigeria<br />
                    📞 +234 (0)8036048403<br />
                    📧 info@safagarenewableenergy.com.ng<br />
                    🌐 www.safagarenewableenergy.com.ng
                </p>
                
                <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    This is an automated confirmation email. Please do not reply to this address.
                </p>
            </div>
        `

        // Send email to business
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: recipientEmail,
            subject: `New Contact Form Submission from ${body.name}`,
            html: businessEmailHtml,
        })

        // Send confirmation email to user
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: body.email,
            subject: 'We Received Your Message - SAF-AGA Renewable Energy',
            html: userEmailHtml,
        })

        return NextResponse.json({
            success: true,
            message: 'Your message has been sent successfully. We will get back to you shortly.',
        })
    } catch (error) {
        console.error('Contact form error:', error)

        // Don't expose internal errors to the client
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to send message. Please try again later or contact us directly at +234 (0)8036048403.',
            },
            { status: 500 }
        )
    }
}
