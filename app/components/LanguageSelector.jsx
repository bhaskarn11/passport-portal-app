import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dropdown } from "@/bootstrap"
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const languages = [{name: "English", code: "EN"}, {name: "Hindi", code: 'HI'}]

function LanguageSelector({variant}) {
    const [lang, setLang] = React.useState(languages[0])
    return (
        <Dropdown>
            <Dropdown.Toggle size="sm" variant={variant?variant : "light"}>
                <FontAwesomeIcon icon={faLanguage} />
                <span className="ms-2">{lang.name}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    languages.map((l, idx) => (
                        <Dropdown.Item key={idx} onClick={() => setLang(l)}>
                            {l.name}
                        </Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default LanguageSelector