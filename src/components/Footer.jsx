export default function AppFooter() {
    const year = new Date().getFullYear()
    return (
        <div className="bg-light text-dark p-3">
            <p className="text-center mb-0">
                &copy; {year} - Jean Paul Byiringiro, All Rights Reserved.
            </p>
        </div>
    )
}