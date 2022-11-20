import { useEffect, useState } from "react";
import axios from "axios";
import copy from 'copy-to-clipboard';

import Button from "../Button";
import * as Styled from "./style";

export default function InputShortening() {
  const [search, setSearch] = useState("");
  const [errorSearch, setErrorSearch] = useState(false);
  const [listLinks, setListLinks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (errorSearch) {
        setErrorSearch(false);
      }
    }, 2000);
  });

  useEffect(() => {
    let getLinks = JSON.parse(localStorage.getItem("short_urls"));
    setListLinks(getLinks);
  }, []);

  useEffect(() => {
    let getLinks = JSON.parse(localStorage.getItem("short_urls"));
    setListLinks(getLinks);
  }, [search]);

  async function handleShorteningTheLink() {
    if (!!search) {
      const result = await axios
        .get(`https://api.shrtco.de/v2/shorten?url=${search}`)
        .catch((err) => {
          setSearch("");
          setErrorSearch(true);
          console.error(err);
        });

      setSearch("");

      const data = {
        original_link: result.data.result.original_link,
        short_link: result.data.result.short_link,
      };

      setLInks(data);
    }
  }

  function setLInks(data) {
    let getLinks = JSON.parse(localStorage.getItem("short_urls"));

    if (getLinks === null) {
      localStorage.setItem("short_urls", JSON.stringify([data]));
    } else {
      getLinks.push(data);
      localStorage.setItem("short_urls", JSON.stringify(getLinks));
    }
  }

  function handleCopy(text) {
    copy(text);

    alert('link copiado');
  }

  return (
    <Styled.Container>
      <div className="center">
        <Styled.ContainerSearch border={errorSearch}>
          <input
            type="text"
            placeholder="Encurtar um link aqui..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div onClick={() => handleShorteningTheLink()}>
            <Button bd="5">Encurtá-lo</Button>
          </div>
        </Styled.ContainerSearch>

        <Styled.ContainerOptions>
          {!!listLinks &&
            listLinks.map((links) => (
              <Styled.Option key={links.short_link}>
                <p>{links.original_link}</p>
                <div>
                  <span>{links.short_link}</span>
                  <div onClick={() => handleCopy(links.short_link)}>
                    <Button bd="4" >
                      Copiar
                    </Button>
                  </div>
                </div>
              </Styled.Option>
            ))}
        </Styled.ContainerOptions>
      </div>
    </Styled.Container>
  );
}
