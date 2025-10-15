import {foolderData} from "../mockData/foolderData";

export const Copyrate = ({ copyrightData }) => {
  const { header } = copyrightData;
  return (
    <>
        <h6 class="copyright_text">
            {header}
        </h6>
    </>
  );
};

const Foolder =() => {
    const {copyrightData} = foolderData;

    return (
        <>
            <div class="copyright">
                <Copyrate copyrightData={copyrightData}/>
            </div>
        </>
    );
};

export default Foolder;
