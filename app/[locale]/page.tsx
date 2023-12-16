import {getCurrentLocale} from "../../locales/server";

export default async function Home() {
    const currentLocale = getCurrentLocale();

    return (
        <div>
            <p>Current locale: {currentLocale}</p>
        </div>
    );
}
