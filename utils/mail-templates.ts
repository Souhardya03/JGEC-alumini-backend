export const WelcomeMail = (name: string) => {
    return (
        `<body
    style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f9; color: #333; line-height: 1.6;">
    <div
        style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        <!-- Header Section -->
        <div style="background-color: #a8b9ed; color: #080A0D; text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/daanphoru/image/upload/v1738305678/Logo_gejtmg.png"
                alt="JGEC Alumni Association Logo" style="max-width: 160px; margin-bottom: 10px; object-fit: contain;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 500;">Welcome to Jalpaiguri Government Engineering
                College Alumni Association</h1>
        </div>

        <!-- Content Section -->
        <div style="padding: 20px">
            <!-- Welcome Greetings -->
            <div>
                <h4 style="color: #516bb7; font-size: 16px; margin-bottom: 4px;">Dear ${name},</h4>
                <p style="font-size: 14px; margin-bottom: 10px;">We are thrilled to welcome you to the <strong style="font-size: 12px;"">JGEC Alumni Association</strong>. It
                    is our pleasure to
                    have you as part of our vibrant community that connects generations of graduates from our
                    prestigious
                    institution.</p>
            </div>

            <!-- Responsibilities -->
            <div>
                <h2 style="color: #516bb7; font-size: 16px; margin-bottom: 0px;">Your Role as an Alumni Member</h2>
                <p style="font-size: 14px;">As a valued member, you have the opportunity to:</p>
                <ul style="font-size: 14px;">
                    <li>Contribute to the growth and success of current students and fellow alumni.</li>
                    <li>Participate in networking events, mentoring programs, and alumni meetups.</li>
                    <li>Stay updated with college news and initiatives.</li>
                    <li>Support institutional development and community engagement projects.</li>
                </ul>
            </div>

            <!-- Best Regards -->
            <div>
                <h2 style="color: #080A0D; font-size: 14px;">Best Regards,</h2>
                <p style="font-size: 14px;">
                    The <strong>JGEC Alumni Association</strong><br>
                    <em>"Strengthening Bonds Beyond Graduation"</em>
                </p>
            </div>
        </div>

        <!-- Footer Section -->
        <div style="background-color: #f4f4f9; text-align: center; padding: 15px; font-size: 14px; color: #555;">
            <p>If you have any questions, feel free to reach us at <a href="mailto:alumni@jgec.ac.in"
                    style="color: #516bb7; text-decoration: none;">alumni@jgec.ac.in</a>.</p>
            <p>Follow us on our social media channels to stay connected!</p>
        </div>
    </div>
</body>`
    )
}