import React, { useEffect, useState } from "react";

export default function SearchBar() {
    return (
        <div>
            <label htmlFor="title-search"> Movie Title </label>
            <input type="search" aria-label="Search for Movie Title"/> 
        </div>
    )
}
