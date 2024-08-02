export default function withAuth(Component) {
    const ComponnentWrapper = (props) => {
        return (
            <>
            <Component {...props} />
            </>
        );
    };

    return ComponnentWrapper;
};