'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';

function GlobalSearch() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Handle click outside to collapse
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle ESC key to collapse
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsExpanded(false);
                if (inputRef.current) {
                    inputRef.current.blur();
                }
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, []);

    // Handle window resize to collapse
    useEffect(() => {
        const handleResize = () => {
            setIsExpanded(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Focus input when expanded
    useEffect(() => {
        if (isExpanded && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isExpanded]);

    const handleExpand = () => {
        setIsExpanded(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle search submission here
        console.log('Search query:', searchValue);
    };

    return (
        <div
            ref={containerRef}
            className="relative flex items-center"
        >
            <div
                className={`
          flex items-center transition-all duration-300 ease-in-out
          ${isExpanded
                        ? 'w-64 bg-gray-100 rounded-full border border-gray-200'
                        : 'w-auto hover:bg-gray-100 rounded-full'
                    }
        `}
                onMouseEnter={handleExpand}
            >
                {/* Search Icon */}
                <button
                    onClick={handleExpand}
                    className={`
            p-2 rounded-full transition-all duration-300
            ${isExpanded
                            ? 'text-gray-600'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                        }
          `}
                >
                    <SearchIcon className="w-5 h-5" />
                </button>

                {/* Search Input */}
                <form onSubmit={handleSubmit} className="flex-1">
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        onChange={handleInputChange}
                        placeholder="Search..."
                        className={`
              bg-transparent border-none outline-none text-sm
              transition-all duration-300 ease-in-out
              ${isExpanded
                                ? 'w-full pr-3 opacity-100'
                                : 'w-0 pr-0 opacity-0 pointer-events-none'
                            }
            `}
                    />
                </form>
            </div>
        </div>
    );
}

export default GlobalSearch;