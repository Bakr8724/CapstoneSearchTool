import Button from 'react-bootstrap/Button';

function ReattemptSearch() {
    const handleClick = () => {
        // Do nothing for now, will be implemented later for FR9
    };
    return (
        <div className="reattempt-search">
        <Button className="reattempt-search-button" variant="primary" onClick={handleClick}>
            Reattempt Search
        </Button>
        </div>
    );
  }

  export default ReattemptSearch;